from datetime import datetime
from typing import Optional

from sqlmodel import SQLModel, Field # pyright: ignore[reportMissingImports]


class Conversation(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)

    text: str

    source: str = "text"

    created_at: datetime = Field(default_factory=datetime.utcnow)