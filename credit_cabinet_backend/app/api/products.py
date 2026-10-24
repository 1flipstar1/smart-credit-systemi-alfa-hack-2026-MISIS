from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.db.models import CreditProduct, CreditProductCategory

router = APIRouter()


def _active(db: Session) -> list[CreditProduct]:
    return (
        db.query(CreditProduct)
        .filter(CreditProduct.active.is_(True))
        .order_by(CreditProduct.sort_order, CreditProduct.name)
        .all()
    )


def _product(p: CreditProduct, titles: dict[str, str]) -> dict:
    return {
        "code": p.code,
        "name": p.name,
        "min_amount": p.min_amount,
        "max_amount": p.max_amount,
        "max_term_months": p.max_term_months,
        "category": p.category,
        "category_title": titles.get(p.category, ""),
        "description": p.description,
        "rate_from": p.rate_from,
        "rate_note": p.rate_note,
        "amount_to": p.amount_to,
        "term_to_months": p.term_to_months,
        "term_note": p.term_note,
        "source_url": p.source_url,
        "preset": {
            "goal": p.preset_goal,
            "amount": p.preset_amount,
            "term_months": p.preset_term_months,
            "secured": p.preset_secured,
        },
    }


def _categories(db: Session) -> list[CreditProductCategory]:
    return db.query(CreditProductCategory).order_by(CreditProductCategory.sort_order).all()


@router.get("")
def list_products(category: str | None = None, db: Session = Depends(get_db)) -> list[dict]:
    products = _active(db)
    if not products:
        # Demo catalog. In production, manage products through the database/admin UI.
        return [
            {
                "code": "business_standard",
                "name": "Кредит для бизнеса",
                "min_amount": 10000,
                "max_amount": 150000000,
                "max_term_months": 120,
            }
        ]
    titles = {c.code: c.title for c in _categories(db)}
    return [_product(p, titles) for p in products if category is None or p.category == category]


@router.get("/summary")
def products_summary(db: Session = Depends(get_db)) -> list[dict]:
    """Key conditions per category: the best published rate, amount and term among its products."""
    products = _active(db)
    summary = []
    for c in _categories(db):
        items = [p for p in products if p.category == c.code]
        if not items:
            continue
        rates = [p.rate_from for p in items if p.rate_from is not None]
        amounts = [p.amount_to for p in items if p.amount_to is not None]
        terms = [p.term_to_months for p in items if p.term_to_months is not None]
        summary.append({
            "code": c.code,
            "title": c.title,
            "description": c.description,
            "products_count": len(items),
            "products": [p.name for p in items],
            "rate_from": min(rates) if rates else None,
            "amount_to": max(amounts) if amounts else None,
            "term_to_months": max(terms) if terms else None,
        })
    return summary


@router.get("/{code}")
def get_product(code: str, db: Session = Depends(get_db)) -> dict:
    product = db.get(CreditProduct, code)
    if product is None or not product.active:
        raise HTTPException(status_code=404, detail="Продукт не найден")
    return _product(product, {c.code: c.title for c in _categories(db)})
