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


def test_update_draft_only_before_submit():
    client = TestClient(app)
    payload = {"product_code": "business_standard", "amount": 1000000, "term_months": 12, "revenue_year": 5000000}
    app_id = client.post("/api/applications", json=payload).json()["id"]

    updated = client.put(f"/api/applications/{app_id}", json={**payload, "amount": 2000000})
    assert updated.status_code == 200
    assert updated.json()["amount"] == 2000000

    client.post(f"/api/applications/{app_id}/submit")
    assert client.put(f"/api/applications/{app_id}", json=payload).status_code == 409


def test_product_catalog_and_summary():
    from app.db.catalog import PRODUCTS, seed_catalog
    from app.db.database import SessionLocal

    with SessionLocal() as db:
        seed_catalog(db)
        seed_catalog(db)  # idempotent
    client = TestClient(app)

    products = client.get("/api/products").json()
    assert len(products) == len(PRODUCTS)
    overdraft = client.get("/api/products/overdraft").json()
    assert overdraft["rate_from"] == 13 and overdraft["amount_to"] == 20e6
    assert overdraft["preset"]["goal"] == "gap"
    assert client.get("/api/products/unknown").status_code == 404
    assert {p["category"] for p in client.get("/api/products?category=line").json()} == {"line"}

    summary = {s["code"]: s for s in client.get("/api/products/summary").json()}
    assert summary["line"]["rate_from"] == 13
    assert summary["secured"]["amount_to"] == 150e6
    assert summary["other"]["rate_from"] is None
    assert sum(s["products_count"] for s in summary.values()) == len(PRODUCTS)
