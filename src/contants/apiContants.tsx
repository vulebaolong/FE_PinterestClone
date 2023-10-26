const isProduction = import.meta.env.PROD;

export const BASE_URL = isProduction ? "https://l9-learning.onrender.com/api/v1" : "http://localhost:6969/api/v1";
