from uuid import uuid4

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.db.models import Application, ApplicationEvent, Document, ScoringPrediction
from app.ml.scoring.predictor import CreditPredictor, ModelUnavailableError
from app.schemas.application import ApplicationCreate, ApplicationOut
from app.schemas.document import DocumentOut
from app.schemas.prediction import PredictionOut
from app.services.workflow_service import change_status

router = APIRouter()


@router.post("", response_model=ApplicationOut, status_code=201)
def create_application(payload: ApplicationCreate, db: Session = Depends(get_db)):
    application_id = str(uuid4())
    app = Application(id=application_id, **payload.model_dump(), status="draft")
    db.add(app)
    db.add(ApplicationEvent(
        application_id=application_id,
        event_type="created",
        to_status="draft",
        message="Заявка создана",
    ))
    db.commit()
    db.refresh(app)
    return app


@router.get("/{application_id}", response_model=ApplicationOut)
def get_application(application_id: str, db: Session = Depends(get_db)):
    app = db.get(Application, application_id)
    if app is None:
        raise HTTPException(status_code=404, detail="Заявка не найдена")
    return app


@router.put("/{application_id}", response_model=ApplicationOut)
def update_draft(application_id: str, payload: ApplicationCreate, db: Session = Depends(get_db)):
    app = db.get(Application, application_id)
    if app is None:
        raise HTTPException(status_code=404, detail="Заявка не найдена")
    if app.status != "draft":
        raise HTTPException(status_code=409, detail="Изменять можно только черновик")
    for field, value in payload.model_dump().items():
        setattr(app, field, value)
    db.commit()
    db.refresh(app)
    return app


@router.post("/{application_id}/submit", response_model=ApplicationOut)
def submit_application(application_id: str, db: Session = Depends(get_db)):
    app = db.get(Application, application_id)
    if app is None:
        raise HTTPException(status_code=404, detail="Заявка не найдена")
    try:
        change_status(db, app, "review", message="Заявка отправлена на рассмотрение")
        db.commit()
        db.refresh(app)
    except ValueError as exc:
        db.rollback()
        raise HTTPException(status_code=409, detail=str(exc)) from exc
    return app


def _client_transition(db: Session, application_id: str, steps: list[tuple[str, str]]) -> Application:
    app = db.get(Application, application_id)
    if app is None:
        raise HTTPException(status_code=404, detail="Заявка не найдена")
    try:
        for new_status, message in steps:
            change_status(db, app, new_status, message=message, actor="client")
        db.commit()
        db.refresh(app)
    except ValueError as exc:
        db.rollback()
        raise HTTPException(status_code=409, detail=str(exc)) from exc
    return app


@router.post("/{application_id}/accept", response_model=ApplicationOut)
def accept_offer(application_id: str, db: Session = Depends(get_db)):
    return _client_transition(db, application_id, [("signing", "Клиент принял предложение")])


@router.post("/{application_id}/decline", response_model=ApplicationOut)
def decline_offer(application_id: str, db: Session = Depends(get_db)):
    return _client_transition(db, application_id, [("declined", "Клиент отказался от предложения")])


@router.post("/{application_id}/sign", response_model=ApplicationOut)
def sign_documents(application_id: str, db: Session = Depends(get_db)):
    # Demo: signature confirmation and disbursement are not integrated, so both steps run at once.
    return _client_transition(db, application_id, [
        ("issuing", "Документы подписаны"),
        ("issued", "Деньги зачислены на счёт"),
    ])


@router.get("/{application_id}/documents", response_model=list[DocumentOut])
def list_documents(application_id: str, db: Session = Depends(get_db)):
    if db.get(Application, application_id) is None:
        raise HTTPException(status_code=404, detail="Заявка не найдена")
    return (
        db.query(Document)
        .filter(Document.application_id == application_id)
        .order_by(Document.created_at.asc())
        .all()
    )


@router.get("/{application_id}/events")
def get_events(application_id: str, db: Session = Depends(get_db)):
    if db.get(Application, application_id) is None:
        raise HTTPException(status_code=404, detail="Заявка не найдена")
    events = (
        db.query(ApplicationEvent)
        .filter(ApplicationEvent.application_id == application_id)
        .order_by(ApplicationEvent.created_at.asc(), ApplicationEvent.id.asc())
        .all()
    )
    return [
        {
            "id": e.id,
            "event_type": e.event_type,
            "from_status": e.from_status,
            "to_status": e.to_status,
            "message": e.message,
            "actor": e.actor,
            "created_at": e.created_at,
        }
        for e in events
    ]


@router.post("/{application_id}/score", response_model=PredictionOut)
def score_application(application_id: str, db: Session = Depends(get_db)):
    app = db.get(Application, application_id)
    if app is None:
        raise HTTPException(status_code=404, detail="Заявка не найдена")

    features = {
        "amount": app.amount,
        "term_months": app.term_months,
        "revenue_year": app.revenue_year,
        "expenses_month": app.expenses_month,
        "debt_payments_month": app.debt_payments_month,
    }
    try:
        predictor = CreditPredictor()
        prediction = predictor.predict(features)
    except ModelUnavailableError as exc:
        raise HTTPException(status_code=503, detail=str(exc)) from exc

    result = ScoringPrediction(
        application_id=app.id,
        prediction=prediction,
        model_version=predictor.version,
        features=features,
    )
    db.add(result)
    db.add(ApplicationEvent(
        application_id=app.id,
        event_type="scoring_completed",
        message=f"Скоринговый прогноз рассчитан (модель {predictor.version})",
    ))
    db.commit()
    db.refresh(result)
    return result
