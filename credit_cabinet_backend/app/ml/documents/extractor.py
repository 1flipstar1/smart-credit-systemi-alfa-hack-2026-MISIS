"""OCR + field extraction for document scans."""

from __future__ import annotations

import re
from itertools import product
from pathlib import Path
from typing import Any, Callable, Dict, List, Optional, Tuple

SUBSTITUTIONS = {"O": "0", "I": "1", "S": "5", "B": "8",
                 "o": "0", "i": "1", "s": "5", "b": "8"}

LABEL_ALIASES = {
    "инн": "inn",
    "inn": "inn",
    "огрн": "ogrn",
    "ogrn": "ogrn",
    "наименование": "name",
    "название": "name",
    "name": "name",
    "company": "name",
    "компания": "name",
    "адрес": "address",
    "address": "address",
    "директор": "director",
    "director": "director",
    "сумма": "amount",
    "amount": "amount",
    "срок": "term_months",
    "term": "term_months",
    "выручка": "revenue",
    "revenue": "revenue",
}


def validate_inn(value: str) -> bool:
    if not isinstance(value, str):
        value = str(value)
    v = re.sub(r"\s+", "", value)
    if not v.isdigit():
        return False
    if len(v) == 10:
        weights = [2, 4, 10, 3, 5, 9, 4, 6, 8]
        s = sum(int(v[i]) * weights[i] for i in range(9))
        return int(v[9]) == (s % 11) % 10
    if len(v) == 12:
        w1 = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]
        w2 = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]
        s1 = sum(int(v[i]) * w1[i] for i in range(10))
        s2 = sum(int(v[i]) * w2[i] for i in range(11))
        return int(v[10]) == (s1 % 11) % 10 and int(v[11]) == (s2 % 11) % 10
    return False


def validate_ogrn(value: str) -> bool:
    if not isinstance(value, str):
        value = str(value)
    v = re.sub(r"\s+", "", value)
    if not v.isdigit():
        return False
    if len(v) == 13:
        return int(v[12]) == (int(v[:12]) % 11) % 10
    if len(v) == 15:
        return int(v[14]) == (int(v[:14]) % 13) % 10
    return False


def enumerate_candidates(raw: str) -> List[str]:
    cleaned = re.sub(r"\s+", "", str(raw))
    positions = [i for i, c in enumerate(cleaned) if c in SUBSTITUTIONS]
    result: set = set()
    for choices in product([False, True], repeat=len(positions)):
        chars = list(cleaned)
        for idx, pos in enumerate(positions):
            if choices[idx]:
                chars[pos] = SUBSTITUTIONS[chars[pos]]
        result.add("".join(chars))
    return sorted(result)


def correct_identifier(raw, valid_lengths, validator):
    if raw is None:
        return None, "MISSING"
    cleaned = re.sub(r"\s+", "", str(raw))
    if not cleaned:
        return None, "MISSING"
    lengths = tuple(valid_lengths)
    candidates = set()
    for cand in enumerate_candidates(cleaned):
        if len(cand) in lengths and cand.isdigit() and validator(cand):
            candidates.add(cand)
    if not candidates:
        return None, "INVALID"
    if len(candidates) == 1:
        cand = next(iter(candidates))
        status = "OK" if cand == cleaned else "CORRECTED"
        return cand, status
    return None, "AMBIGUOUS"
is_valid_inn = validate_inn
is_valid_ogrn = validate_ogrn
check_inn = validate_inn
check_ogrn = validate_ogrn
correct_ocr = correct_identifier
correct_ocr_identifier = correct_identifier
ocr_candidates = enumerate_candidates


def _valid_lengths_for_key(key: str):
    low = key.lower()
    if "inn" in low or "инн" in low:
        return (10, 12)
    if "ogrn" in low or "огрн" in low:
        return (13, 15)
    return ()


def _validator_for_key(key: str):
    low = key.lower()
    if "inn" in low or "инн" in low:
        return validate_inn
    if "ogrn" in low or "огрн" in low:
        return validate_ogrn
    return None


def _read_text_and_confidences(file_path: str):
    path = Path(file_path)
    suffix = path.suffix.lower()
    try:
        if suffix == ".pdf":
            import pdfplumber

            chunks = []
            with pdfplumber.open(str(path)) as pdf:
                for page in pdf.pages:
                    chunks.append(page.extract_text() or "")
            text = "\n".join(chunks)
            confs = [1.0] if text.strip() else []
            return text, confs, "pdf_text_layer"
        if suffix in {".txt", ".text", ".md"}:
            text = path.read_text(encoding="utf-8", errors="ignore")
            confs = [1.0] if text.strip() else []
            return text, confs, "manual"
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
            data = pytesseract.image_to_data(img, lang="rus", output_type=pytesseract.Output.DICT)
            confs = []
            for w, c in zip(data.get("text", []), data.get("conf", [])):
                if str(w).strip():
                    try:
                        confs.append(float(c) / 100.0)
                    except (TypeError, ValueError):
                        confs.append(0.0)
            text = pytesseract.image_to_string(img, lang="rus")
            if not confs:
                confs = [0.0]
            return text, confs, "tesseract"
    except Exception:
        return "", [], "tesseract"


def _normalize_label(label: str) -> str:
    clean = label.strip().lower()
    clean = " ".join(clean.split())
    alias = {
        "инн": "inn", "inn": "inn",
        "огрн": "ogrn", "ogrn": "ogrn",
        "наименование": "name", "название": "name", "name": "name",
        "company": "name", "компания": "name",
        "адрес": "address", "address": "address",
        "директор": "director", "director": "director",
        "сумма": "amount", "amount": "amount",
        "срок": "term_months", "term": "term_months",
        "выручка": "revenue", "revenue": "revenue",
    }.get(clean)
    if alias:
        return alias
    return re.sub(r"[^a-zа-яё0-9]+", "_", clean).strip("_")


def _extract_label_value_pairs(text: str):
    pairs = []
    for line in text.splitlines():
        m = re.match(r"\s*([A-Za-zА-Яа-яЁё0-9 _\-]{2,40}?)\s*[:：]\s*(.+?)\s*$", line)
        if m:
            pairs.append((m.group(1).strip(), m.group(2).strip()))
            continue
        m2 = re.match(r"\s*([A-Za-zА-Яа-яЁё0-9 _\-]{2,40}?)\s*[-–—]\s+(.+?)\s*$", line)
        if m2:
            pairs.append((m2.group(1).strip(), m2.group(2).strip()))
    return pairs


def extract_fields(file_path: str, document_type) -> dict:
    if isinstance(document_type, dict):
        doc_label = document_type.get("label") or document_type.get("document_type") or "unknown"
    else:
        doc_label = str(document_type)

    text, confs, source = _read_text_and_confidences(file_path)
    overall_confidence = min(confs) if confs else 0.0

    fields = {}
    field_confidences = {}

    for label, value in _extract_label_value_pairs(text):
        key = _normalize_label(label)
        if not key:
            continue
        fields[key] = value
        field_confidences[key] = float(overall_confidence)

    for key in list(fields.keys()):
        validator = _validator_for_key(key)
        lengths = _valid_lengths_for_key(key)
        if validator is None or not lengths:
            continue
        raw = fields.get(key)
        corrected, status = correct_identifier(raw, lengths, validator)
        if status == "AMBIGUOUS":
            fields[key] = "AMBIGUOUS"
            field_confidences[key] = 0.0
        elif status in ("OK", "CORRECTED") and corrected is not None:
            fields[key] = corrected
        else:
            field_confidences[key] = min(field_confidences.get(key, overall_confidence), 0.5)

    if not text.strip():
        fields = {}
        field_confidences = {}
        overall_confidence = 0.0

    return {
        "fields": fields,
        "field_confidences": field_confidences,
        "confidence": float(overall_confidence),
    }
