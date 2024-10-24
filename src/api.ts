import axios from "axios";
import { CreateEmbeddingResponse } from "./types";

export const getTextEmbedding = async (text: string) => {
  const { data } = await axios.post<undefined, CreateEmbeddingResponse>(
    "https://d2lau6bs1ulmoj.cloudfront.net/create-embedding",
    { text }
  );
  return data.body.vectors;
};
