from typing import Any
from pydantic import BaseModel, ConfigDict
from datetime import datetime


class DocumentOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: str
    application_id: str
    filename: str
    content_type: str
    status: str
    created_at: datetime


class ExtractionOut(BaseModel):
    document_type: str
    fields: dict[str, Any]
    confidence: float | None
    validation: dict[str, Any]
