"""Credit product catalog seeded into the database.

Data lives in credit_catalog.json — the "Все предложения по кредитам для бизнеса" list on
https://alfabank.ru/sme/profits/. Only conditions published on that page are filled in;
the rest stay null ("индивидуально"). `npm run build` embeds the same file into the client
prototype as an offline fallback, so edit the JSON, not copies of it.
"""

import json
from pathlib import Path

from sqlalchemy.orm import Session

from app.db.models import CreditProduct, CreditProductCategory

CATALOG_PATH = Path(__file__).with_name("credit_catalog.json")
CATALOG = json.loads(CATALOG_PATH.read_text(encoding="utf-8"))
PRODUCTS = CATALOG["products"]


def seed_catalog(db: Session) -> None:
    """Insert catalog rows that are missing; existing rows are left as edited."""
    for order, c in enumerate(CATALOG["categories"]):
        if db.get(CreditProductCategory, c["code"]) is None:
            db.add(CreditProductCategory(code=c["code"], title=c["title"], description=c["description"], sort_order=order))
    for order, p in enumerate(PRODUCTS):
        if db.get(CreditProduct, p["code"]) is not None:
            continue
        preset = p["preset"]
        db.add(CreditProduct(
            code=p["code"], name=p["name"], category=p["category"], sort_order=order, description=p["description"],
            rate_from=p["rate_from"], rate_note=p["rate_note"], amount_to=p["amount_to"],
            term_to_months=p["term_to_months"], term_note=p["term_note"], source_url=p["source_url"],
            min_amount=10000, max_amount=p["amount_to"] or 150e6, max_term_months=p["term_to_months"] or 120,
            preset_goal=preset["goal"], preset_amount=preset["amount"],
            preset_term_months=preset["term_months"], preset_secured=preset["secured"],
        ))
    db.commit()
