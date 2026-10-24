from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.admin import router as admin_router
from app.api.applications import router as applications_router
from app.api.documents import router as documents_router
from app.api.products import router as products_router
from app.core.config import settings
from app.db.database import init_db

app = FastAPI(title=settings.app_name, version="0.1.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def startup() -> None:
    init_db()


@app.get("/api/health", tags=["system"])
def health() -> dict[str, str]:
    return {"status": "ok"}


app.include_router(products_router, prefix="/api/products", tags=["products"])
app.include_router(applications_router, prefix="/api/applications", tags=["applications"])
app.include_router(documents_router, prefix="/api", tags=["documents"])
app.include_router(admin_router, prefix="/api/admin", tags=["admin"])
