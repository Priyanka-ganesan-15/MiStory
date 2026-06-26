from abc import ABC, abstractmethod

from app.ai.types import LLMRequest, LLMResponse


class BaseLLMProvider(ABC):

    @abstractmethod
    def generate(
        self,
        request: LLMRequest,
    ) -> LLMResponse:
        pass