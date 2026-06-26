from fastapi import APIRouter, Depends

from sqlmodel import Session

from app.core.database import get_session
from app.schemas.conversation import (
    ConversationCreate,
)
from app.services.conversation_service import (
    ConversationService,
)

router = APIRouter()

service = ConversationService()


@router.post("/")
def create_conversation(
    payload: ConversationCreate,
    session: Session = Depends(get_session),
):
    return service.create(
        session,
        payload,
    )


@router.get("/")
def list_conversations(
    session: Session = Depends(get_session),
):
    return service.list(session)