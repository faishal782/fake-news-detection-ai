export interface PredictionResult {
  prediction: "REAL" | "FAKE";
  confidence: number;
  explanation: string[];
}