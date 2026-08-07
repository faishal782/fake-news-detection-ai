import api from "@/lib/axios";

export const analyzeNews = async (data: {
  url?: string;
  content?: string;
}) => {
  const response = await api.post("/predict", data);
  return response.data;
};