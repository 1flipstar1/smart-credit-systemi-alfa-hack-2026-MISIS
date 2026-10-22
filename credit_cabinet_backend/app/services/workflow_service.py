from app.db.models import Application, ApplicationEvent
from sqlalchemy.orm import Session


TRANSITIONS = {
    "draft": {"review"},
    "review": {"approved", "expert", "counter", "needinfo", "refused"},
    "expert": {"approved", "counter", "needinfo", "refused"},
    "needinfo": {"review", "refused"},
    "approved": {"signing", "declined"},
    "counter": {"signing", "declined"},
    "signing": {"issuing", "declined"},
    "issuing": {"issued"},
    "issued": set(),
    "refused": set(),
    "declined": set(),
}


def change_status(
    db: Session,
    application: Application,
    new_status: str,
    message: str = "",
    actor: str = "system",
) -> None:
    old_status = application.status
    allowed = TRANSITIONS.get(old_status, set())
    if new_status not in allowed:
        raise ValueError(f"Недопустимый переход статуса: {old_status} -> {new_status}")

    application.status = new_status
    db.add(ApplicationEvent(
        application_id=application.id,
        event_type="status_changed",
        from_status=old_status,
        to_status=new_status,
        message=message,
        actor=actor,
    ))
