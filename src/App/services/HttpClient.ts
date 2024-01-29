import axios from "axios";

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_PORTFOLIO_API_URL,
});

httpClient.interceptors.request.use(async (config) => {
  const jwtToken = import.meta.env.VITE_JWT_SERVICE;

  config.headers.Authorization = `Bearer ${jwtToken}`;
  return config;
});

export default httpClient;
