def extract_fields(file_path: str, document_type: dict) -> dict:
    # TODO: connect OCR + field extraction model for supported document types.
    # Keep unknown fields empty and route low-confidence output to manual review.
    return {
        "fields": {},
        "confidence": 0.0,
    }
