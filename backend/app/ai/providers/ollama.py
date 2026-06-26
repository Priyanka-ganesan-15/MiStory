from ollama import Client

from app.ai.providers.base import BaseLLMProvider
from app.ai.types import LLMRequest, LLMResponse

from app.core.config import settings


class OllamaProvider(BaseLLMProvider):

    def __init__(self):
        self.client = Client(host=settings.OLLAMA_URL)

    def generate(
        self,
        request: LLMRequest,
    ) -> LLMResponse:

        response = self.client.chat(
            model=settings.MODEL_NAME,
            messages=[
                {
                    "role": "system",
                    "content": request.system_prompt,
                },
                {
                    "role": "user",
                    "content": request.user_prompt,
                },
            ],
            options={
                "temperature": request.temperature,
            },
        )

        return LLMResponse(
            content=response["message"]["content"]
        )