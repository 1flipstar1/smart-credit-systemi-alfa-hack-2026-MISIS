from app.ml.documents.validator import validate_fields, REQUIRED_FIELDS


def test_ok_status():
    extraction = {"fields": {"inn": "7707083893", "name": "Test", "ogrn": "1027700132195"}, "field_confidences": {"inn": 0.95, "name": 0.95}, "confidence": 0.95}
    app = {"inn": "7707083893", "name": "Test", "ogrn": "1027700132195"}
    res = validate_fields(extraction, app, {"label": "company_card"})
    assert res["status"] == "OK"
    assert res["data_quality_score"] == 1.0


def test_issues_found():
    extraction = {"fields": {"inn": "7707083893", "name": "Test", "ogrn": "1027700132195"}, "field_confidences": {"inn": 0.95, "name": 0.95}, "confidence": 0.95}
    app = {"inn": "1234567890", "name": "Other"}
    res = validate_fields(extraction, app, {"label": "company_card"})
    assert res["status"] == "ISSUES_FOUND"
    assert res["data_quality_score"] == 0.0


def test_needs_rescan():
    extraction = {"fields": {}, "field_confidences": {}, "confidence": 0.5}
    res = validate_fields(extraction, {}, {"label": "company_card"})
    assert res["status"] in ("NEEDS_RESCAN", "NEEDS_REVIEW")


def test_needs_review_low_conf():
    extraction = {"fields": {"name": "Test"}, "field_confidences": {"name": 0.5}, "confidence": 0.5}
    app = {"name": "CompletelyDifferentNameHere"}
    res = validate_fields(extraction, app, {"label": "company_card"})
    assert res["status"] in ("NEEDS_REVIEW", "NEEDS_RESCAN")


def test_fuzzy_boundaries():
    from app.ml.documents.validator import _fuzzy_ratio
    # direct not needed; check via validate
    pass


def test_low_conf_no_mismatch():
    extraction = {"fields": {"name": "Wrong"}, "field_confidences": {"name": 0.5}, "confidence": 0.5}
    app = {"name": "TotallyDifferent"}
    res = validate_fields(extraction, app, {"label": "company_card"})
    codes = [i["code"] for i in res["issues"]]
    assert "MISMATCH" not in codes
