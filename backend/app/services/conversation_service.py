from sqlmodel import Session

from app.models.conversation import Conversation
from app.repositories.conversation_repository import (
    ConversationRepository,
)
from app.schemas.conversation import ConversationCreate


class ConversationService:

    def __init__(self):
        self.repository = ConversationRepository()

    def create(
        self,
        session: Session,
        payload: ConversationCreate,
    ):
        conversation = Conversation(
            text=payload.text,
            source=payload.source,
        )

        return self.repository.create(
            session,
            conversation,
        )

    def list(
        self,
        session: Session,
    ):
        return self.repository.list(session)