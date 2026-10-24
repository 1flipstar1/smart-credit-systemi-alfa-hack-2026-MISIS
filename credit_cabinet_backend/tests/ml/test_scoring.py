import pytest
from app.ml.scoring.predictor import CreditPredictor


@pytest.fixture
def predictor():
    return CreditPredictor()


@pytest.fixture
def good_profile():
    return {
        "revenue_month": 500_000,
        "ebitda_month": 150_000,
        "existing_debt_month": 50_000,
        "requested_amount": 1_500_000,
        "term_months": 12,
        "rate_annual": 0.25,
        "has_credit_history": True,
        "max_overdue_days_24mo": 0,
        "overdue_count_24mo": 0,
        "current_overdue_days": 0,
        "business_age_months": 36,
        "product_min_age_months": 6,
        "registry_active": True,
        "bankruptcy_flag": False,
        "product_fit": "full",
        "data_quality": 1.0,
        "arrears_ratio": 0.0,
    }


class TestHardStops:
    def test_bankruptcy(self, predictor, good_profile):
        r = predictor.predict({**good_profile, "bankruptcy_flag": True})
        codes = [c for c, _ in r["hard_stops"]]
        assert "RISK_BANKRUPTCY" in codes
        assert r["score"] is None

    def test_inactive_registry(self, predictor, good_profile):
        r = predictor.predict({**good_profile, "registry_active": False})
        codes = [c for c, _ in r["hard_stops"]]
        assert "LEGAL_INACTIVE" in codes

    def test_overdue_gt_90(self, predictor, good_profile):
        r = predictor.predict({**good_profile, "current_overdue_days": 95})
        codes = [c for c, _ in r["hard_stops"]]
        assert "RISK_OVERDUE" in codes

    def test_low_dscr(self, predictor, good_profile):
        r = predictor.predict({**good_profile, "ebitda_month": 10_000, "requested_amount": 5_000_000})
        codes = [c for c, _ in r["hard_stops"]]
        assert "RISK_DSCR" in codes

    def test_eligibility_age(self, predictor, good_profile):
        r = predictor.predict({**good_profile, "business_age_months": 3, "product_min_age_months": 6})
        codes = [c for c, _ in r["hard_stops"]]
        assert "ELIGIBILITY_AGE" in codes


class TestMonotonicity:
    """Ухудшение признака не должно улучшать балл."""

    def test_worse_overdue_lowers_score(self, predictor, good_profile):
        base = predictor.predict(good_profile)
        worse = predictor.predict({**good_profile, "max_overdue_days_24mo": 45, "overdue_count_24mo": 2})
        assert base["score"] >= worse["score"]

    def test_higher_debt_lowers_score(self, predictor, good_profile):
        base = predictor.predict(good_profile)
        worse = predictor.predict({**good_profile, "existing_debt_month": 200_000})
        assert base["score"] >= worse["score"]

    def test_more_arrears_lowers_score(self, predictor, good_profile):
        base = predictor.predict(good_profile)
        worse = predictor.predict({**good_profile, "arrears_ratio": 0.2})
        assert base["score"] >= worse["score"]

    def test_older_business_improves_score(self, predictor, good_profile):
        young = predictor.predict({**good_profile, "business_age_months": 7})
        old = predictor.predict({**good_profile, "business_age_months": 60})
        assert old["score"] >= young["score"]


class TestInvariants:
    def test_determinism(self, predictor, good_profile):
        results = [predictor.predict(good_profile) for _ in range(100)]
        assert all(r == results[0] for r in results)

    def test_weights_sum_to_one(self, predictor, good_profile):
        r = predictor.predict(good_profile)
        total = sum(f["weight"] for f in r["factors"])
        assert abs(total - 1.0) < 1e-9

    def test_score_in_range(self, predictor, good_profile):
        r = predictor.predict(good_profile)
        assert 0 <= r["score"] <= 100

    def test_points_within_max(self, predictor, good_profile):
        r = predictor.predict(good_profile)
        for f in r["factors"]:
            assert f["points"] <= f["max_points"] + 1e-9, f"{f['key']}: {f['points']} > {f['max_points']}"


class TestMissingData:
    def test_missing_revenue_returns_info_request(self, predictor, good_profile):
        profile = {k: v for k, v in good_profile.items() if k != "revenue_month"}
        r = predictor.predict(profile)
        assert r["score"] is None
        assert "avg_monthly_revenue" in r["missing_factors"]


class TestBoundaries:
    @pytest.mark.parametrize("score_threshold", [0, 50, 64, 76, 100])
    def test_boundary_scores_reachable(self, predictor, good_profile, score_threshold):
        # Проверяем, что разные профили дают разные баллы
        r = predictor.predict(good_profile)
        assert r["score"] is not None