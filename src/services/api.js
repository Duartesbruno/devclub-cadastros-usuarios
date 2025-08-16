import axios from 'axios';

const getBaseURL = () => {
  // const isProduction = import.meta.env.PROD;
  const VITE_PRODUCTION_API_URL = import.meta.env.VITE_PRODUCTION_API_URL;
  // const VITE_HML_API_URL = import.meta.env.VITE_HML_API_URL;
  const VITE_LOCAL_API_URL = import.meta.env.VITE_LOCAL_API_URL;

  // if (isProduction && VITE_PRODUCTION_API_URL) {
  //   return VITE_PRODUCTION_API_URL;
  // }

  // if (!isProduction && VITE_HML_API_URL) {
  //   return VITE_HML_API_URL;
  // }

  if (VITE_PRODUCTION_API_URL) {
    return VITE_PRODUCTION_API_URL;
  }

  return VITE_LOCAL_API_URL || 'http://localhost:3000';
};

const api = axios.create({
  baseURL: getBaseURL(),
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;