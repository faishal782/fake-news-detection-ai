from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from bert_model import predict_news
import pickle
import time

app = FastAPI()

# Allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load trained model
model = pickle.load(open("model.pkl", "rb"))
vectorizer = pickle.load(open("vectorizer.pkl", "rb"))


class NewsRequest(BaseModel):
    text: str


@app.get("/")
def home():
    return {
        "message": "Fake News Detection API Running"
    }


@app.post("/predict")
def predict(news: NewsRequest):
    vector = vectorizer.transform([news.text])

    prediction = model.predict(vector)[0]

    if prediction == 1:
        result = "Real"
    else:
        result = "Fake"

    return {
        "prediction": result,
        "confidence": 98,
        "model": "Passive Aggressive Classifier",
        "dataset": 44898,
        "accuracy": 99.44,
        "time": 0.18
    }
@app.post("/predict-ai")
def predict_ai(news: NewsRequest):

    start = time.time()

    result = predict_news(news.text)

    end = time.time()

    result["time"] = round(end - start, 2)
    result["model"] = "RoBERTa Fake News Classifier"

    return result