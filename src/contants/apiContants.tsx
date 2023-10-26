const isProduction = import.meta.env.PROD;

export const MAIN_URL = isProduction ? "https://l9-learning.onrender.com" : "http://localhost:6969";
export const BASE_URL = isProduction ? `${MAIN_URL}/api/v1` : `${MAIN_URL}/api/v1`;
