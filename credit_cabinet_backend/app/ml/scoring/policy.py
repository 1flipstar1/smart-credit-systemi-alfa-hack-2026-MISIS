import os
from typing import Any, Dict, List, Optional, Tuple


def _principal_from_payment(payment: float, rate_annual: float, term_months: int) -> float:
    i = rate_annual / 12.0
    if term_months <= 0:
        return 0.0
    if i == 0:
        return payment * term_months
    return payment * (1 - (1 + i) ** (-term_months)) / i


def resolve(score_result: dict, request: dict, product: dict, thresholds: dict) -> dict:
    score_result = score_result or {}
    request = request or {}
    product = product or {}
    thresholds = thresholds or {}

    hard_stops = score_result.get("hard_stops", []) or []
    missing_factors = score_result.get("missing_factors", []) or []
    imputed_factors = score_result.get("imputed_factors", []) or []
    score = score_result.get("score")
    metrics = score_result.get("metrics", {}) or {}

    approve = thresholds.get("approve", 76)
    modify = thresholds.get("modify", 64)
    info = thresholds.get("info", 50)

    key_rate = float(os.environ.get("KEY_RATE_ANNUAL", "0.21"))
    spread = float(product.get("spread", 0.03))
    if score is None:
        surcharge = 0.03
    elif score >= 85:
        surcharge = 0.0
    elif score >= 76:
        surcharge = 0.005
    elif score >= 64:
        surcharge = 0.015
    else:
        surcharge = 0.03
    rate = key_rate + spread + surcharge

    pricing = {"rate_annual": rate, "key_rate": key_rate, "spread": spread, "surcharge": surcharge}

    reasons: List[Tuple[str, str]] = []
    info_requests: List[str] = []

    if hard_stops:
        for code, reason in hard_stops:
            reasons.append((code, reason))
        return {
            "decision": "REJECT",
            "reasons": reasons,
            "counter_offer": None,
            "info_requests": [],
            "pricing": pricing,
            "policy_version": "policy-1.0.0",
        }

    if missing_factors:
        for f in missing_factors:
            info_requests.append(f)
            reasons.append(("MISSING_DATA", f"Missing {f}"))
        return {
            "decision": "INFO_REQUEST",
            "reasons": reasons,
            "counter_offer": None,
            "info_requests": info_requests,
            "pricing": pricing,
            "policy_version": "policy-1.0.0",
        }

    if score is not None and score >= approve and not imputed_factors:
        return {
            "decision": "APPROVE",
            "reasons": [("APPROVE", "Score meets approval threshold")],
            "counter_offer": None,
            "info_requests": [],
            "pricing": pricing,
            "policy_version": "policy-1.0.0",
        }

    if score is not None and score >= modify:
        ebitda = metrics.get("ebitda_month")
        if ebitda is None:
            ebitda = (request.get("revenue_month") or 0) * 0.3
        try:
            ebitda = float(ebitda)
        except (TypeError, ValueError):
            ebitda = 0.0
        existing_debt = float(request.get("existing_debt_month", 0) or 0)
        revenue = float(request.get("revenue_month", request.get("revenue", 1)) or 1)
        target_dscr = 1.30
        payment_cap = ebitda / target_dscr - existing_debt
        payment_cap = min(payment_cap, revenue / 2.5)
        term = int(request.get("term_months", 12) or 12)
        p_max = _principal_from_payment(payment_cap, rate, term)
        p_max = (int(p_max) // 10000) * 10000
        min_amount = float(product.get("min_amount", 0) or 0)
        max_amount = float(product.get("max_amount", p_max) or p_max)
        requested = float(request.get("amount", 0) or 0)
        p_max = min(p_max, max_amount, requested)
        p_max = max(p_max, 0)
        if p_max < min_amount:
            reasons.append(("AFFORDABILITY", "Cannot afford minimum amount"))
            return {
                "decision": "REJECT",
                "reasons": reasons,
                "counter_offer": None,
                "info_requests": [],
                "pricing": pricing,
                "policy_version": "policy-1.0.0",
            }
        new_payment = p_max * (rate / 12) / (1 - (1 + rate / 12) ** (-term)) if term > 0 else 0
        dscr_after = ebitda / (existing_debt + new_payment) if (existing_debt + new_payment) > 0 else None
        dscr_before = metrics.get("dscr")
        counter_offer = {
            "amount": float(p_max),
            "term_months": term,
            "monthly_payment": float(new_payment),
            "dscr_before": float(dscr_before) if dscr_before is not None else 0.0,
            "dscr_after": float(dscr_after) if dscr_after is not None else 0.0,
            "rate_annual": rate,
            "client_message": "Modified offer based on affordability",
        }
        return {
            "decision": "APPROVE_MODIFIED",
            "reasons": [("MODIFIED", "Score meets modified threshold")],
            "counter_offer": counter_offer,
            "info_requests": [],
            "pricing": pricing,
            "policy_version": "policy-1.0.0",
        }
    if score is not None and score >= info:
        info_requests = ["additional_documents"]
        reasons.append(("INFO", "Additional info required"))
        return {
            "decision": "INFO_REQUEST",
            "reasons": reasons,
            "counter_offer": None,
            "info_requests": info_requests,
            "pricing": pricing,
            "policy_version": "policy-1.0.0",
        }

    factors = score_result.get("factors", []) or []
    for f in factors:
        if f.get("normalized", 1) < 0.5:
            reasons.append(("LOW_FACTOR", f"Low {f.get('key')}"))
    if not reasons:
        reasons.append(("REJECT", "Score below threshold"))
    return {
        "decision": "REJECT",
        "reasons": reasons,
        "counter_offer": None,
        "info_requests": [],
        "pricing": pricing,
        "policy_version": "policy-1.0.0",
    }
