from sqlmodel import Session

from app.models.symptom import Symptom
from app.repositories.symptom_repository import SymptomRepository
from app.schemas.symptom import SymptomCreate


class SymptomService:

    def __init__(self):
        self.repository = SymptomRepository()

    def create(
        self,
        session: Session,
        payload: SymptomCreate,
    ):
        symptom = Symptom(**payload.model_dump())

        return self.repository.create(
            session,
            symptom,
        )