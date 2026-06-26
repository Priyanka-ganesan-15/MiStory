from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.conversation import router as conversation_router

from app.core.database import create_db_and_tables

app = FastAPI(title="MiStory API")


@app.on_event("startup")
def on_startup():
    create_db_and_tables()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)

app.include_router(
    conversation_router,
    prefix="/api/conversations",
    tags=["Conversations"],
)


@app.get("/")
def health():
    return {"status": "ok"}