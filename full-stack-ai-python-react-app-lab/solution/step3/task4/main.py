from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from model import get_ai_response

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/analyze")
async def analyze(request: Request):
    return {"result": ""}
