from datetime import datetime
from typing import Optional

from sqlmodel import SQLModel, Field


class Symptom(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)

    conversation_id: int = Field(index=True)

    name: str

    duration: Optional[str] = None

    frequency: Optional[str] = None

    location: Optional[str] = None

    severity: Optional[str] = None

    resolved: bool = False

    confidence: float = 0.0

    created_at: datetime = Field(default_factory=datetime.utcnow)