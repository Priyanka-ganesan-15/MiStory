from sqlmodel import Session, select

from app.models.conversation import Conversation


class ConversationRepository:

    def create(
        self,
        session: Session,
        conversation: Conversation,
    ):
        session.add(conversation)
        session.commit()
        session.refresh(conversation)

        return conversation

    def list(
        self,
        session: Session,
    ):
        statement = (
            select(Conversation)
            .order_by(Conversation.created_at.desc())
        )

        return session.exec(statement).all()