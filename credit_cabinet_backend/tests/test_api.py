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


def test_client_flow_to_issued():
    client = TestClient(app)
    payload = {
        "product_code": "business_standard",
        "amount": 3000000,
        "term_months": 24,
        "revenue_year": 18400000,
    }
    app_id = client.post("/api/applications", json=payload).json()["id"]
    assert client.post(f"/api/applications/{app_id}/submit").json()["status"] == "review"

    decided = client.post(f"/api/admin/applications/{app_id}/decision", json={"decision": "approved"})
    assert decided.status_code == 200, decided.text

    assert client.post(f"/api/applications/{app_id}/sign").status_code == 409
    assert client.post(f"/api/applications/{app_id}/accept").json()["status"] == "signing"
    assert client.post(f"/api/applications/{app_id}/sign").json()["status"] == "issued"
    assert client.get(f"/api/applications/{app_id}/documents").json() == []


def test_cors_allows_browser_frontend():
    client = TestClient(app)
    response = client.get("/api/health", headers={"Origin": "null"})
    assert response.headers.get("access-control-allow-origin") == "*"
