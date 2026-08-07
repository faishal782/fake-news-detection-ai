from transformers import pipeline

print("Loading Fake News AI Model...")

classifier = pipeline(
    "text-classification",
    model="hamzab/roberta-fake-news-classification",
    device=0
)

print("Fake News AI Model Loaded Successfully!")

def predict_news(text):
    result = classifier(text)[0]

    prediction = "Real" if result["label"] == "TRUE" else "Fake"

    return {
        "prediction": prediction,
        "confidence": round(result["score"] * 100, 2)
    }


if __name__ == "__main__":
    text = "NASA successfully launched a new satellite into orbit."

    print(predict_news(text))