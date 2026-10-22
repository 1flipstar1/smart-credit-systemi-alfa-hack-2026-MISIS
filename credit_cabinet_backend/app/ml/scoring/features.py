FEATURE_ORDER = [
    "amount",
    "term_months",
    "revenue_year",
    "expenses_month",
    "debt_payments_month",
]


def prepare_features(values: dict[str, float]) -> list[float]:
    missing = [name for name in FEATURE_ORDER if name not in values]
    if missing:
        raise ValueError(f"Не хватает признаков: {', '.join(missing)}")
    return [float(values[name]) for name in FEATURE_ORDER]
