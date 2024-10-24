export type Message = {
  user: {
    name: string;
    isBot?: boolean;
    
  };
  message: string;
  date:Date
};

export type CreateEmbeddingResponse = {
  data: {
    statusCode: number;
    body: { vectors: number[] };

  };
};
