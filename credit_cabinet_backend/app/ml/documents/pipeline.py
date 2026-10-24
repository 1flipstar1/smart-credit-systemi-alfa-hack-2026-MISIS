from __future__ import annotations

import logging
from typing import Any, Dict, Optional

from app.ml.documents.classifier import classify_document
from app.ml.documents.extractor import extract_fields
from app.ml.documents.validator import validate_fields


class DocumentProcessingError(Exception):
    """Raised when document processing fails."""


logger = logging.getLogger(__name__)

PIPELINE_VERSION = "pipeline-1.0.0"
ENGINE_VERSION = "tesseract"


def process_document(
    file_path: str,
    application_data: dict,
    document_type_hint: Optional[str] = None,
) -> dict:
    application_data = application_data or {}

    try:
        if document_type_hint:
            document_type = {
                "label": document_type_hint,
                "confidence": 1.0,
                "needs_manual_review": False,
            }
        else:
            document_type = classify_document(file_path)

        extraction = extract_fields(file_path, document_type)
        validation = validate_fields(extraction, application_data, document_type)

        if document_type.get("label") == "unknown":
            validation = dict(validation)
            validation["valid"] = False
            validation["status"] = "ISSUES_FOUND"
            validation["needs_manual_review"] = True

        status = validation.get("status", "ISSUES_FOUND")

        return {
            "document_type": document_type.get("label", "unknown"),
            "fields": extraction.get("fields", {}),
            "field_confidences": extraction.get("field_confidences", {}),
            "page_confidence": float(extraction.get("confidence", 0.0) or 0.0),
            "confidence": float(extraction.get("confidence", 0.0) or 0.0),
            "validation": validation,
            "provenance": {
                "source": "tesseract",
                "engine_version": ENGINE_VERSION,
                "pipeline_version": PIPELINE_VERSION,
            },
            "status": status,
        }
    except DocumentProcessingError as exc:
        logger.exception("Document processing error")
        return _error_response(str(exc))
    except Exception as exc:  # noqa: BLE001
        logger.exception("Unexpected document processing error")
        return _error_response(str(exc))


def _error_response(details: str) -> dict:
    return {
        "document_type": "unknown",
        "fields": {},
        "field_confidences": {},
        "page_confidence": 0.0,
        "confidence": 0.0,
        "validation": {
            "valid": False,
            "status": "PROCESSING_ERROR",
            "needs_manual_review": True,
            "issues": [{"field": None, "code": "PROCESSING_ERROR", "message": details, "severity": "high"}],
            "missing_required": [],
            "field_validations": {},
            "data_quality_score": 0.0,
        },
        "provenance": {
            "source": "tesseract",
            "engine_version": ENGINE_VERSION,
            "pipeline_version": PIPELINE_VERSION,
        },
        "status": "PROCESSING_ERROR",
        "error": details,
    }
