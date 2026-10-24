"""Validation of extracted document fields."""

from __future__ import annotations

from datetime import datetime, date
from typing import Any, Dict, List, Optional

try:
    from rapidfuzz import fuzz as _rfuzz

    def _fuzzy_ratio(a: str, b: str) -> float:
        return _rfuzz.ratio(str(a), str(b)) / 100.0
except Exception:
    import difflib

    def _fuzzy_ratio(a: str, b: str) -> float:
        return difflib.SequenceMatcher(None, str(a), str(b)).ratio()


REQUIRED_FIELDS: Dict[str, Any] = {
    "company_card": [
        "inn",
        "ogrn",
        "name",
        {"field": "ceo_full_name", "when": {"legal_form": "ooo"}},
    ],
    "credit_application": [
        "inn",
        "amount",
        "term_months",
    ],
    "financial_statement": [
        "inn",
        "revenue",
    ],
    "unknown": [],
}

EXACT_FIELDS = {"inn", "ogrn", "amount", "term_months", "date", "registration_date"}
TEXT_FIELDS = {"name", "address", "ceo_full_name", "person", "purpose"}


def _get_field_confidence(extraction: dict, field: str) -> float:
    confs = extraction.get("field_confidences", {}) or {}
    if field in confs:
        try:
            return float(confs[field])
        except (TypeError, ValueError):
            return 0.0
    return float(extraction.get("confidence", 0.0) or 0.0)


def _missing_required(document_type: dict, fields: dict, application_data: dict) -> List[str]:
    label = document_type.get("label") if isinstance(document_type, dict) else str(document_type)
    required = REQUIRED_FIELDS.get(label, [])
    missing = []
    for item in required:
        if isinstance(item, dict):
            field = item["field"]
            when = item.get("when", {})
            ok = True
            for k, v in when.items():
                source = fields if k in fields else application_data
                if str(source.get(k, "")).lower() != str(v).lower():
                    ok = False
                    break
            if not ok:
                continue
            if fields.get(field) in (None, ""):
                missing.append(field)
        else:
            if fields.get(item) in (None, ""):
                missing.append(item)
    return missing
def _validate_format(field: str, value: Any, issues: List[dict]) -> None:
    from app.ml.documents.extractor import validate_inn, validate_ogrn

    low = field.lower()
    if "inn" in low:
        if not validate_inn(str(value)):
            issues.append({"field": field, "code": "FORMAT_INVALID", "message": "Invalid INN checksum", "severity": "high"})
    if "ogrn" in low:
        if not validate_ogrn(str(value)):
            issues.append({"field": field, "code": "FORMAT_INVALID", "message": "Invalid OGRN checksum", "severity": "high"})
    if low in ("amount", "requested_amount", "revenue"):
        try:
            if float(value) <= 0:
                issues.append({"field": field, "code": "FORMAT_INVALID", "message": "Amount must be > 0", "severity": "high"})
        except (TypeError, ValueError):
            issues.append({"field": field, "code": "FORMAT_INVALID", "message": "Invalid amount", "severity": "high"})
    if low in ("term_months", "term"):
        try:
            if int(value) <= 0:
                issues.append({"field": field, "code": "FORMAT_INVALID", "message": "Term must be > 0", "severity": "high"})
        except (TypeError, ValueError):
            issues.append({"field": field, "code": "FORMAT_INVALID", "message": "Invalid term", "severity": "high"})
    if "date" in low:
        try:
            d = value
            if isinstance(d, str):
                d = datetime.fromisoformat(d).date()
            if isinstance(d, datetime):
                d = d.date()
            if isinstance(d, date) and d > date.today():
                issues.append({"field": field, "code": "FORMAT_INVALID", "message": "Date must not be in future", "severity": "high"})
        except (TypeError, ValueError):
            pass
def validate_fields(extraction: dict, application_data: dict, document_type: dict) -> dict:
    extraction = extraction or {}
    fields = extraction.get("fields", {}) or {}
    application_data = application_data or {}
    document_type = document_type or {}

    issues: List[dict] = []
    field_validations: Dict[str, Any] = {}

    missing_required = _missing_required(document_type, fields, application_data)
    for f in missing_required:
        issues.append({"field": f, "code": "MISSING", "message": "Required field missing", "severity": "medium"})

    for field, value in fields.items():
        before = len(issues)
        _validate_format(field, value, issues)
        for issue in issues[before:]:
            field_validations[field] = issue["code"]

    for field, value in fields.items():
        app_val = application_data.get(field)
        if app_val is None:
            continue
        conf = _get_field_confidence(extraction, field)
        low = field.lower()
        if field in EXACT_FIELDS or low in EXACT_FIELDS:
            norm_a = str(value).strip().lower()
            norm_b = str(app_val).strip().lower()
            if norm_a != norm_b:
                if conf >= 0.80:
                    issues.append({"field": field, "code": "MISMATCH", "message": "Value does not match application", "severity": "high"})
                else:
                    issues.append({"field": field, "code": "LOW_CONFIDENCE", "message": "Low OCR confidence, manual review", "severity": "low"})
                field_validations[field] = "MISMATCH" if conf >= 0.80 else "LOW_CONFIDENCE"
        elif field in TEXT_FIELDS or low in TEXT_FIELDS:
            ratio = _fuzzy_ratio(str(value), str(app_val))
            if ratio >= 0.95:
                field_validations[field] = "OK"
            elif ratio <= 0.35:
                if conf >= 0.80:
                    issues.append({"field": field, "code": "MISMATCH", "message": "Text mismatch with application", "severity": "high"})
                    field_validations[field] = "MISMATCH"
                else:
                    issues.append({"field": field, "code": "LOW_CONFIDENCE", "message": "Low OCR confidence, manual review", "severity": "low"})
                    field_validations[field] = "LOW_CONFIDENCE"
            else:
                issues.append({"field": field, "code": "LOW_CONFIDENCE", "message": "Low similarity, manual review", "severity": "low"})
                field_validations[field] = "LOW_CONFIDENCE"

    if "business_age_months" in fields and "registration_date" in fields:
        try:
            reg = fields["registration_date"]
            if isinstance(reg, str):
                reg = datetime.fromisoformat(reg).date()
            if isinstance(reg, datetime):
                reg = reg.date()
            if isinstance(reg, date):
                months = (date.today().year - reg.year) * 12 + (date.today().month - reg.month)
                if abs(months - int(fields["business_age_months"])) > 2:
                    issues.append({"field": "business_age_months", "code": "INCONSISTENT", "message": "business_age_months inconsistent with registration_date", "severity": "medium"})
        except (TypeError, ValueError):
            pass

    if "amount" in fields and isinstance(application_data.get("product_limits"), dict):
        limits = application_data["product_limits"]
        try:
            amt = float(fields["amount"])
            if "min" in limits and amt < float(limits["min"]):
                issues.append({"field": "amount", "code": "INCONSISTENT", "message": "Amount below product minimum", "severity": "medium"})
            if "max" in limits and amt > float(limits["max"]):
                issues.append({"field": "amount", "code": "INCONSISTENT", "message": "Amount above product maximum", "severity": "medium"})
        except (TypeError, ValueError):
            pass

    if "purpose" in fields and isinstance(application_data.get("allowed_purposes"), list):
        if str(fields["purpose"]).lower() not in [str(p).lower() for p in application_data["allowed_purposes"]]:
            issues.append({"field": "purpose", "code": "INCONSISTENT", "message": "Purpose not allowed", "severity": "medium"})

    has_issues_found = any(i["code"] in ("MISMATCH", "FORMAT_INVALID") for i in issues)
    scan_quality_low = float(extraction.get("confidence", 0.0) or 0.0) < 0.80
    has_missing = len(missing_required) > 0
    needs_rescan = has_missing and scan_quality_low
    has_low_conf = any(i["code"] == "LOW_CONFIDENCE" for i in issues)

    if has_issues_found:
        status = "ISSUES_FOUND"
    elif needs_rescan:
        status = "NEEDS_RESCAN"
    elif has_low_conf or has_missing:
        status = "NEEDS_REVIEW"
    else:
        status = "OK"

    if has_missing and status == "OK":
        status = "NEEDS_REVIEW"

    valid = status == "OK"
    needs_manual_review = status != "OK"
    quality_map = {"OK": 1.0, "NEEDS_REVIEW": 0.6, "NEEDS_RESCAN": 0.2, "ISSUES_FOUND": 0.0}

    return {
        "valid": valid,
        "status": status,
        "needs_manual_review": needs_manual_review,
        "issues": issues,
        "missing_required": missing_required,
        "field_validations": field_validations,
        "data_quality_score": quality_map[status],
    }
