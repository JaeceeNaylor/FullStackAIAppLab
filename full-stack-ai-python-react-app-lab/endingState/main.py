from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from model import get_ai_response

app = FastAPI()

# CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/analyze")
async def analyze(request: Request):
    body = await request.json()
    prompt = body.get("prompt")
    try:
        response = get_ai_response(prompt)
        return {"result": response}
    except Exception as e:
        return {"error": str(e)}
