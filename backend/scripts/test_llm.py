from app.ai.providers.ollama import OllamaProvider
from app.ai.types import LLMRequest

provider = OllamaProvider()

response = provider.generate(
    LLMRequest(
        system_prompt="You are a helpful assistant.",
        user_prompt="Say hello from MiStory in one sentence.",
    )
)

print(response.content)