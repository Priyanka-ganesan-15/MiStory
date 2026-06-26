from sqlmodel import Session

from app.models.symptom import Symptom


class SymptomRepository:

    def create(
        self,
        session: Session,
        symptom: Symptom,
    ):
        session.add(symptom)

        session.commit()

        session.refresh(symptom)

        return symptom