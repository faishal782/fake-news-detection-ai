from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from bert_model import predict_news
import time

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class NewsRequest(BaseModel):
    text: str

@app.get("/")
def home():
    return {
        "message": "Fake News Detection API Running"
    }

@app.post("/predict-ai")
def predict_ai(news: NewsRequest):
    start = time.time()

    result = predict_news(news.text)

    end = time.time()

    result["time"] = round(end - start, 2)
    result["model"] = "RoBERTa Fake News Classifier"

    return result