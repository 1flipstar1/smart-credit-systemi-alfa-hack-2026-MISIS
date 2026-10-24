from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.db.models import CreditProduct

router = APIRouter()


@router.get("")
def list_products(db: Session = Depends(get_db)) -> list[dict]:
    products = db.query(CreditProduct).filter(CreditProduct.active.is_(True)).all()
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
    return [
        {
            "code": p.code,
            "name": p.name,
            "min_amount": p.min_amount,
            "max_amount": p.max_amount,
            "max_term_months": p.max_term_months,
        }
        for p in products
    ]
