from langchain_openai import ChatOpenAI

model = ChatOpenAI(model="gpt-4o", base_url="http://0.0.0.0:4000", api_key="test-key")


def get_ai_response(prompt):
    return
