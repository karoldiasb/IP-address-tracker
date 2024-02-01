import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_IPIFY_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
      apiKey: process.env.NEXT_PUBLIC_API_IPIFY_KEY,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
