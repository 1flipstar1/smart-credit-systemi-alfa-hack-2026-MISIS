from pathlib import Path
from uuid import uuid4

from fastapi import APIRouter, Depends, File, HTTPException, UploadFile
from sqlalchemy.orm import Session

from app.core.config import settings
from app.db.database import get_db
from app.db.models import Application, Document, DocumentExtraction, DocumentJob
from app.schemas.document import DocumentOut, ExtractionOut

router = APIRouter()
ALLOWED_TYPES = {"application/pdf", "image/jpeg", "image/png"}


@router.post("/applications/{application_id}/documents", response_model=DocumentOut, status_code=201)
async def upload_document(
    application_id: str,
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
):
    app = db.get(Application, application_id)
    if app is None:
        raise HTTPException(status_code=404, detail="Заявка не найдена")
    if file.content_type not in ALLOWED_TYPES:
        raise HTTPException(status_code=415, detail="Поддерживаются только PDF, JPEG и PNG")
    content = await file.read()
    max_bytes = settings.max_upload_mb * 1024 * 1024
    if not content:
        raise HTTPException(status_code=400, detail="Файл пуст")
    if len(content) > max_bytes:
        raise HTTPException(status_code=413, detail=f"Размер файла превышает {settings.max_upload_mb} МБ")

    document_id = str(uuid4())
    upload_dir = Path(settings.upload_dir)
    upload_dir.mkdir(parents=True, exist_ok=True)
    suffix = Path(file.filename or "upload").suffix[:12]
    storage_path = upload_dir / f"{document_id}{suffix}"
    storage_path.write_bytes(content)

    document = Document(
        id=document_id,
        application_id=application_id,
        filename=Path(file.filename or "document").name[:255],
        content_type=file.content_type,
        storage_key=str(storage_path),
        status="queued",
    )
    db.add(document)
    db.flush()
    db.add(DocumentJob(document_id=document_id, status="pending"))
    db.commit()
    db.refresh(document)
    return document


@router.get("/documents/{document_id}", response_model=DocumentOut)
def get_document(document_id: str, db: Session = Depends(get_db)):
    document = db.get(Document, document_id)
    if document is None:
        raise HTTPException(status_code=404, detail="Документ не найден")
    return document


@router.get("/documents/{document_id}/extraction", response_model=ExtractionOut)
def get_extraction(document_id: str, db: Session = Depends(get_db)):
    document = db.get(Document, document_id)
    if document is None:
        raise HTTPException(status_code=404, detail="Документ не найден")
    result = (
        db.query(DocumentExtraction)
        .filter(DocumentExtraction.document_id == document_id)
        .order_by(DocumentExtraction.created_at.desc())
        .first()
    )
    if result is None:
        raise HTTPException(status_code=409, detail="Распознавание ещё не завершено")
    return {
        "document_type": result.document_type,
        "fields": result.fields,
        "confidence": result.confidence,
        "validation": result.validation,
    }
