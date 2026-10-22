from datetime import datetime
from pydantic import BaseModel, Field, ConfigDict


class ApplicationCreate(BaseModel):
    product_code: str = Field(min_length=1, max_length=64)
    amount: float = Field(gt=0, le=10_000_000)
    term_months: int = Field(ge=1, le=120)
    goal: str = Field(default="", max_length=500)
    inn: str = Field(default="", pattern=r"^$|^\d{10}$|^\d{12}$")
    revenue_year: float = Field(gt=0)
    expenses_month: float = Field(default=0, ge=0)
    debt_payments_month: float = Field(default=0, ge=0)


class ApplicationOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: str
    product_code: str
    amount: float
    term_months: int
    goal: str
    inn: str
    revenue_year: float
    expenses_month: float
    debt_payments_month: float
    status: str
    created_at: datetime


class DecisionRequest(BaseModel):
    decision: str = Field(pattern="^(approved|counter|refused|needinfo)$")
    comment: str = Field(default="", max_length=2000)
