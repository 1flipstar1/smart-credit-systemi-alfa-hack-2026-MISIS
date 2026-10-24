import tempfile
from pathlib import Path

import pytest

from app.ml.documents import pipeline as P


def write_txt(content: str) -> str:
    d = tempfile.mkdtemp()
    p = Path(d) / "doc.txt"
    p.write_text(content, encoding="utf-8")
    return str(p)


def test_good_scan_ok():
    path = write_txt("ИНН: 7707083893\nНаименование: Test")
    app = {"inn": "7707083893", "name": "Test"}
    res = P.process_document(path, app)
    assert res["status"] in ("OK", "NEEDS_REVIEW")
    assert res["validation"]["data_quality_score"] in (1.0, 0.6)


def test_inn_mismatch():
    path = write_txt("ИНН: 7707083893\nНаименование: Test")
    app = {"inn": "1234567890", "name": "Test"}
    res = P.process_document(path, app)
    assert res["status"] == "ISSUES_FOUND"


def test_blurry_scan():
    path = write_txt("")
    res = P.process_document(path, {})
    assert res["status"] in ("NEEDS_RESCAN", "NEEDS_REVIEW", "ISSUES_FOUND")


def test_unknown_doc():
    path = write_txt("random gibberish xyz")
    res = P.process_document(path, {})
    assert res["document_type"] == "unknown"
    assert res["status"] == "ISSUES_FOUND"


def test_ocr_exception(monkeypatch):
    def raise_exc(fp, dt):
        raise RuntimeError("boom")
    monkeypatch.setattr(P, "extract_fields", raise_exc)
    path = write_txt("ИНН: 1")
    res = P.process_document(path, {})
    assert res["status"] == "PROCESSING_ERROR"


def test_determinism():
    path = write_txt("ИНН: 7707083893\nНаименование: Test")
    app = {"inn": "7707083893", "name": "Test"}
    results = [P.process_document(path, app) for _ in range(10)]
    assert all(r == results[0] for r in results)
