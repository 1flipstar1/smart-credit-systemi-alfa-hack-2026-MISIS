def validate_fields(extraction: dict, document_type: dict) -> dict:
    fields = extraction.get("fields", {})
    confidence = float(extraction.get("confidence", 0.0))
    issues = []

    if document_type.get("label") == "unknown":
        issues.append("Тип документа не распознан")
    if confidence < 0.85:
        issues.append("Низкая уверенность распознавания")
    if not fields:
        issues.append("Не удалось извлечь поля")

    return {
        "valid": False,
        "needs_manual_review": True,
        "issues": issues,
    }
