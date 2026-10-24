from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.db.models import Application, ApplicationEvent, CreditDecision
from app.schemas.application import DecisionRequest
from app.services.workflow_service import change_status

router = APIRouter()


@router.get("/applications")
def list_applications(
    status: str | None = Query(default=None),
    db: Session = Depends(get_db),
):
    query = db.query(Application)
    if status:
        query = query.filter(Application.status == status)
    apps = query.order_by(Application.created_at.desc()).limit(500).all()
    return [
        {
            "id": a.id,
            "product_code": a.product_code,
            "amount": a.amount,
            "term_months": a.term_months,
            "goal": a.goal,
            "inn": a.inn,
            "status": a.status,
            "created_at": a.created_at,
        }
        for a in apps
    ]


@router.post("/applications/{application_id}/decision")
def make_manual_decision(
    application_id: str,
    payload: DecisionRequest,
    db: Session = Depends(get_db),
):
    app = db.get(Application, application_id)
    if app is None:
        raise HTTPException(status_code=404, detail="Заявка не найдена")
    if app.status not in {"review", "expert", "needinfo"}:
        raise HTTPException(status_code=409, detail="Для текущего статуса ручное решение недоступно")

    try:
        change_status(db, app, payload.decision, message=payload.comment or "Решение сотрудника", actor="demo-admin")
        db.add(CreditDecision(
            application_id=app.id,
            decision=payload.decision,
            comment=payload.comment,
            actor="demo-admin",
        ))
        db.commit()
        db.refresh(app)
    except ValueError as exc:
        db.rollback()
        raise HTTPException(status_code=409, detail=str(exc)) from exc
    return {"application_id": app.id, "status": app.status}


@router.get("/analytics")
def analytics(db: Session = Depends(get_db)):
    rows = db.query(Application.status).all()
    counts: dict[str, int] = {}
    for (status,) in rows:
        counts[status] = counts.get(status, 0) + 1
    return {
        "total_applications": len(rows),
        "by_status": counts,
    }
