from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from model import get_ai_response

app = FastAPI()
