from typing import Optional

from sqlmodel import SQLModel


class SymptomCreate(SQLModel):
    conversation_id: int

    name: str

    duration: Optional[str] = None

    frequency: Optional[str] = None

    location: Optional[str] = None

    severity: Optional[str] = None

    resolved: bool = False

    confidence: float = 0.0


class SymptomRead(SymptomCreate):
    id: int