# File storage abstraction. Local storage is used in this starter.
# Replace with an S3/MinIO adapter before multi-container/production use.
from pathlib import Path
from app.core.config import settings


def resolve_storage_path(storage_key: str) -> Path:
    path = Path(storage_key).resolve()
    root = Path(settings.upload_dir).resolve()
    if root not in path.parents:
        raise ValueError("Invalid storage key")
    return path
