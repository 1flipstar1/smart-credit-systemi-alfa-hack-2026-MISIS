"""Document type classification via keyword heuristics on OCR/text layer."""

from __future__ import annotations

from pathlib import Path
from typing import Any

DOCUMENT_TYPES = ("company_card", "credit_application", "financial_statement", "unknown")

_KEYWORDS = {
    "company_card": [
        "карточка", "реквизиты", "инн", "огрн", "кпп", "юридический адрес",
        "директор", "company card", "requisites", "inn", "ogrn",
    ],
    "credit_application": [
        "заявка", "кредит", "сумма", "срок", "цель", "application",
        "credit", "loan", "amount", "term",
    ],
    "financial_statement": [
        "баланс", "отчет", "выручка", "прибыль", "активы", "обязательства",
        "financial", "balance", "revenue", "profit", "assets",
    ],
}


def _read_text(file_path: str) -> str:
    path = Path(file_path)
    suffix = path.suffix.lower()
    try:
        if suffix == ".pdf":
            import pdfplumber

            chunks = []
            with pdfplumber.open(str(path)) as pdf:
                for page in pdf.pages:
                    chunks.append(page.extract_text() or "")
            return "\n".join(chunks)
        if suffix in {".txt", ".text", ".md"}:
            return path.read_text(encoding="utf-8", errors="ignore")
        import os
        import pytesseract
        from PIL import Image

        if not getattr(pytesseract.pytesseract, "tesseract_cmd", None) or pytesseract.pytesseract.tesseract_cmd == "tesseract":
            env_cmd = os.getenv("TESSERACT_CMD")
            if env_cmd:
                pytesseract.pytesseract.tesseract_cmd = env_cmd
            else:
                candidate = Path(__file__).resolve().parents[3] / "tools" / "tesseract" / "tesseract.exe"
                if candidate.exists():
                    pytesseract.pytesseract.tesseract_cmd = str(candidate)

        with Image.open(path) as img:
            return pytesseract.image_to_string(img, lang="rus")
    except Exception:
        return ""


def classify_document(file_path: str) -> dict:
    """Classify a document into one of the supported types."""
    text = _read_text(file_path)
    lowered = text.lower()
    scores: dict[str, int] = {label: 0 for label in DOCUMENT_TYPES if label != "unknown"}
    for label, keywords in _KEYWORDS.items():
        for kw in keywords:
            if kw in lowered:
                scores[label] += 1

    if not scores or max(scores.values()) == 0:
        return {"label": "unknown", "confidence": 0.0, "needs_manual_review": True}

    best_label = max(scores, key=lambda k: scores[k])
    best_score = scores[best_label]
    if best_score >= 3:
        confidence = 0.95
    elif best_score == 2:
        confidence = 0.85
    elif best_score == 1:
        confidence = 0.6
    else:
        confidence = 0.0

    top_values = sorted(scores.values(), reverse=True)
    if len(top_values) > 1 and top_values[0] == top_values[1] and top_values[0] > 0:
        confidence = min(confidence, 0.7)

    needs_manual_review = confidence < 0.8 or best_label == "unknown"
    return {
        "label": best_label,
        "confidence": float(confidence),
        "needs_manual_review": bool(needs_manual_review),
    }