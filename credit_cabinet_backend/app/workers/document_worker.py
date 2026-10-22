import time
from pathlib import Path

from app.db.database import SessionLocal, init_db
from app.db.models import Document, DocumentExtraction, DocumentJob
from app.ml.documents.pipeline import process_document


def process_one_job() -> bool:
    db = SessionLocal()
    try:
        job = (
            db.query(DocumentJob)
            .filter(DocumentJob.status == "pending")
            .order_by(DocumentJob.created_at.asc(), DocumentJob.id.asc())
            .first()
        )
        if job is None:
            return False

        job.status = "processing"
        job.attempts += 1
        document = db.get(Document, job.document_id)
        if document is None:
            job.status = "failed"
            job.error = "Документ не найден"
            db.commit()
            return True

        document.status = "processing"
        db.commit()

        try:
            result = process_document(document.storage_key)
            db.add(DocumentExtraction(
                document_id=document.id,
                document_type=result["document_type"],
                fields=result["fields"],
                confidence=result["confidence"],
                validation=result["validation"],
            ))
            document.status = result["status"]
            job.status = "done"
            db.commit()
        except Exception as exc:
            db.rollback()
            job = db.get(DocumentJob, job.id)
            document = db.get(Document, job.document_id) if job else None
            if job:
                job.status = "failed"
                job.error = str(exc)[:2000]
            if document:
                document.status = "failed"
            db.commit()
        return True
    finally:
        db.close()


def main() -> None:
    init_db()
    while True:
        worked = process_one_job()
        if not worked:
            time.sleep(2)


if __name__ == "__main__":
    main()
