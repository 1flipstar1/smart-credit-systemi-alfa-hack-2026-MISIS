import os
import tempfile

from app.ml.documents.classifier import classify_document
from app.ml.documents.extractor import (
    extract_fields,
    validate_inn,
    validate_ogrn,
    correct_identifier,
    enumerate_candidates,
)


def _write_text(text):
    fd, path = tempfile.mkstemp(suffix=".txt")
    with os.fdopen(fd, "w", encoding="utf-8") as f:
        f.write(text)
    return path


def test_classifier_types():
    cases = {
        "company_card": "Карточка компании\nИНН: 7707083893\nОГРН: 1027700132195",
        "credit_application": "Заявка на кредит\nСумма: 1000000\nСрок: 12",
        "financial_statement": "Финансовый отчет\nВыручка: 5000000\nПрибыль: 100000",
        "unknown": "hello world",
    }
    for label, text in cases.items():
        p = _write_text(text)
        res = classify_document(p)
        assert res["label"] == label
        os.remove(p)


def test_checksums():
    assert validate_inn("7707083893") is True
    assert validate_inn("7707083894") is False
    assert validate_inn("500100732259") is True
    assert validate_ogrn("1027700132195") is True
    assert validate_ogrn("1027700132196") is False


def test_ocr_correction_unique():
    val, status = correct_identifier("77O7083893", (10, 12), validate_inn)
    assert status in ("OK", "CORRECTED")
    assert val == "7707083893"


def test_extract_clean():
    text = "INN: 7707083893\nName: Test Company\nOGRN: 1027700132195"
    p = _write_text(text)
    res = extract_fields(p, {"label": "company_card"})
    assert "inn" in res["fields"]
    assert res["fields"]["inn"] == "7707083893"
    assert res["confidence"] >= 0.9
    os.remove(p)


def test_extract_empty():
    p = _write_text("")
    res = extract_fields(p, {"label": "unknown"})
    assert res["fields"] == {}
    os.remove(p)
