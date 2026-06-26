from dataclasses import dataclass


@dataclass
class LLMRequest:
    system_prompt: str
    user_prompt: str
    temperature: float = 0.1


@dataclass
class LLMResponse:
    content: str