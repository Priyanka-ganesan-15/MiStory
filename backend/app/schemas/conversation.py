from sqlmodel import SQLModel


class ConversationCreate(SQLModel):
    text: str
    source: str = "text"


class ConversationRead(SQLModel):
    id: int
    text: str
    source: str
    created_at: str