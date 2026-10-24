import os
from typing import Any, Dict, List, Optional, Tuple


class ModelUnavailableError(Exception):
    """Raised when a required scoring model artifact is unavailable."""


def _interp(x: float, points: List[Tuple[float, float]]) -> float:
    if x <= points[0][0]:
        return points[0][1]
    if x >= points[-1][0]:
        return points[-1][1]
    for i in range(len(points) - 1):
        x0, y0 = points[i]
        x1, y1 = points[i + 1]
        if x0 <= x <= x1:
            if x1 == x0:
                return y1
            return y0 + (y1 - y0) * (x - x0) / (x1 - x0)
    return points[-1][1]


class CreditPredictor:
    VERSION = "rule-based-1.0.0"

    def __init__(self):
        pass

    def predict(self, values: dict) -> dict:
        v = values or {}
        missing_factors: List[str] = []
        imputed_factors: List[str] = []

        hard_stops: List[Tuple[str, str]] = []
        if v.get("bankruptcy_flag"):
            hard_stops.append(("RISK_BANKRUPTCY", "Bankruptcy flag present"))
        if v.get("registry_active") is False:
            hard_stops.append(("LEGAL_INACTIVE", "Registry inactive"))
        current_overdue = v.get("current_overdue_days", 0) or 0
        try:
            current_overdue = int(current_overdue)
        except (TypeError, ValueError):
            current_overdue = 0
        if current_overdue > 90:
            hard_stops.append(("RISK_OVERDUE", "Current overdue > 90 days"))

        revenue_month = v.get("revenue_month")
        ebitda_month = v.get("ebitda_month")
        ebitda_source = "statement_or_client"
        if ebitda_month is None:
            margin = v.get("ebitda_margin")
            if revenue_month is not None and margin is not None:
                try:
                    ebitda_month = float(revenue_month) * float(margin)
                    ebitda_source = "estimated"
                    imputed_factors.append("ebitda_month")
                except (TypeError, ValueError):
                    ebitda_month = None
            else:
                ebitda_source = "estimated"

        if revenue_month is None:
            missing_factors.append("avg_monthly_revenue")
        if ebitda_month is None and v.get("ebitda_margin") is None and v.get("ebitda_month") is None:
            missing_factors.append("ebitda_month_or_margin")

        existing_debt = v.get("existing_debt_month", 0) or 0
        try:
            existing_debt = float(existing_debt)
        except (TypeError, ValueError):
            existing_debt = 0.0
        requested_amount = v.get("requested_amount", v.get("amount", 0)) or 0
        try:
            requested_amount = float(requested_amount)
        except (TypeError, ValueError):
            requested_amount = 0.0
        term_months = v.get("term_months", 12) or 12
        try:
            term_months = int(term_months)
        except (TypeError, ValueError):
            term_months = 12
        rate_annual = float(v.get("rate_annual", 0.21) or 0.21)

        i = rate_annual / 12.0
        if term_months > 0 and i != 0:
            payment = requested_amount * i / (1 - (1 + i) ** (-term_months))
        elif term_months > 0:
            payment = requested_amount / term_months
        else:
            payment = 0.0

        if ebitda_month is not None:
            try:
                dscr = float(ebitda_month) / (existing_debt + payment) if (existing_debt + payment) > 0 else None
            except (TypeError, ValueError):
                dscr = None
        else:
            dscr = None

        if dscr is not None and dscr < 0.4 and ebitda_source in ("statement_or_client", "client"):
            hard_stops.append(("RISK_DSCR", "DSCR below 0.8"))

        product_min_age = v.get("product_min_age_months", 0) or 0
        business_age_months = v.get("business_age_months", 0) or 0
        try:
            business_age_months = int(business_age_months)
        except (TypeError, ValueError):
            business_age_months = 0
        if business_age_months < product_min_age:
            hard_stops.append(("ELIGIBILITY_AGE", "Business age below product minimum"))
        max_overdue = v.get("max_overdue_days_24mo", 0) or 0
        overdue_count = v.get("overdue_count_24mo", 0) or 0
        try:
            max_overdue = int(max_overdue)
            overdue_count = int(overdue_count)
        except (TypeError, ValueError):
            max_overdue = 0
            overdue_count = 0
        has_credit_history = v.get("has_credit_history", True)
        if current_overdue > 90:
            history_factor = 0.0
        elif not has_credit_history:
            history_factor = 0.60
        elif max_overdue == 0 and overdue_count == 0:
            history_factor = 1.0
        elif max_overdue <= 30:
            history_factor = max(0.50, 0.68 - 0.06 * min(overdue_count, 3))
        elif max_overdue <= 60:
            history_factor = 0.32
        elif max_overdue <= 90:
            history_factor = 0.12
        else:
            history_factor = 0.02

        if dscr is None:
            debt_burden_norm = 0.5
        else:
            debt_burden_norm = _interp(float(dscr), [(0.8, 0.0), (1.0, 0.25), (1.25, 0.6), (1.5, 0.85), (2.0, 1.0)])

        coverage = v.get("coverage_ratio", 0.5)
        stability = v.get("stability_ratio", 0.5)
        try:
            coverage = float(coverage)
            stability = float(stability)
        except (TypeError, ValueError):
            coverage = 0.5
            stability = 0.5
        financial_capacity_norm = 0.6 * coverage + 0.4 * stability

        business_age_norm = _interp(float(business_age_months), [(6, 0.0), (12, 0.35), (24, 0.65), (36, 0.85), (60, 1.0)])

        arrears_ratio = v.get("arrears_ratio", 0.0)
        try:
            arrears_ratio = float(arrears_ratio)
        except (TypeError, ValueError):
            arrears_ratio = 0.0
        registry_tax_norm = _interp(arrears_ratio, [(0.0, 1.0), (0.02, 0.8), (0.05, 0.5), (0.15, 0.1), (0.3, 0.0)])

        product_fit_raw = v.get("product_fit", "full")
        if product_fit_raw == "full":
            product_fit_norm = 1.0
        elif product_fit_raw == "adjustable":
            product_fit_norm = 0.5
        else:
            product_fit_norm = 0.0

        data_quality_norm = v.get("data_quality", 0.5)
        try:
            data_quality_norm = float(data_quality_norm)
        except (TypeError, ValueError):
            data_quality_norm = 0.5

        factors = []
        weights = {
            "credit_history": 0.25,
            "debt_burden": 0.20,
            "financial_capacity": 0.20,
            "business_age": 0.10,
            "registry_tax": 0.10,
            "product_fit": 0.10,
            "data_quality": 0.05,
        }
        normalized_map = {
            "credit_history": history_factor,
            "debt_burden": debt_burden_norm,
            "financial_capacity": financial_capacity_norm,
            "business_age": business_age_norm,
            "registry_tax": registry_tax_norm,
            "product_fit": product_fit_norm,
            "data_quality": data_quality_norm,
        }
        for key, w in weights.items():
            norm = normalized_map[key]
            factors.append({
                "key": key,
                "weight": w,
                "normalized": float(norm),
                "points": float(w * 100 * norm),
                "max_points": float(w * 100),
                "evidence": {"value": v.get(key)},
            })

        score = None
        if not missing_factors and not hard_stops:
            score = float(sum(f["points"] for f in factors))

        if hard_stops:
            score = None

        try:
            coverage_out = float(coverage)
        except (TypeError, ValueError):
            coverage_out = 0.0

        return {
            "score": score,
            "score_meaning": "0–100, higher = lower risk; NOT default probability",
            "hard_stops": hard_stops,
            "factors": factors,
            "missing_factors": missing_factors,
            "imputed_factors": imputed_factors,
            "metrics": {
                "dscr": dscr,
                "payment": payment,
                "coverage": coverage_out,
                "ebitda_source": ebitda_source,
            },
            "version": self.VERSION,
        }
