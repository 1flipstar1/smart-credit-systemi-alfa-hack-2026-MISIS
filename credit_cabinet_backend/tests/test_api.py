from fastapi.testclient import TestClient

from app.main import app
from app.db.database import Base, engine


def setup_module():
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)


def test_health():
    client = TestClient(app)
    response = client.get("/api/health")
    assert response.status_code == 200
    assert response.json()["status"] == "ok"


def test_create_and_get_application():
    client = TestClient(app)
    payload = {
        "product_code": "business_standard",
        "amount": 500000,
        "term_months": 36,
        "goal": "Оборотные средства",
        "inn": "1234567890",
        "revenue_year": 6000000,
        "expenses_month": 100000,
        "debt_payments_month": 20000,
    }
    created = client.post("/api/applications", json=payload)
    assert created.status_code == 201, created.text
    application = created.json()
    assert application["status"] == "draft"

    fetched = client.get(f"/api/applications/{application['id']}")
    assert fetched.status_code == 200
    assert fetched.json()["id"] == application["id"]
