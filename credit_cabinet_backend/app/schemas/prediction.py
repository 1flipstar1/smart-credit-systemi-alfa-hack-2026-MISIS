from datetime import datetime
from pydantic import BaseModel, ConfigDict


class PredictionOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    application_id: str
    prediction: float
    model_version: str
    features: dict
    created_at: datetime
