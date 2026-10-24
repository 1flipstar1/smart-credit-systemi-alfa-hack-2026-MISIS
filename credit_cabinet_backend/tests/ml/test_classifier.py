from app.ml.documents.classifier import classify_document
import os
import tempfile


def test_unknown_on_empty():
    fd, p = tempfile.mkstemp(suffix=".txt")
    os.close(fd)
    res = classify_document(p)
    assert res["label"] == "unknown"
    os.remove(p)
