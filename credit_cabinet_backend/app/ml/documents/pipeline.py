from app.ml.documents.classifier import classify_document
from app.ml.documents.extractor import extract_fields
from app.ml.documents.validator import validate_fields


def process_document(file_path: str) -> dict:
    document_type = classify_document(file_path)
    extraction = extract_fields(file_path, document_type)
    validation = validate_fields(extraction, document_type)

    return {
        "document_type": document_type.get("label", "unknown"),
        "fields": extraction.get("fields", {}),
        "confidence": extraction.get("confidence", 0.0),
        "validation": validation,
        "status": "recognized" if validation.get("valid") else "manual_review",
    }
