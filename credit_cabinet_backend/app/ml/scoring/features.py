FEATURE_ORDER = [
    "credit_history",
    "debt_burden",
    "financial_capacity",
    "business_age",
    "registry_tax",
    "product_fit",
    "data_quality",
    "current_overdue_days",
    "max_overdue_days_24mo",
    "overdue_count_24mo",
    "bankruptcy_flag",
    "registry_active",
    "revenue_month",
    "ebitda_month",
    "existing_debt_month",
    "business_age_months",
    "arrears_ratio",
]


def prepare_features(values: dict) -> dict:
    return {k: values.get(k) for k in FEATURE_ORDER}