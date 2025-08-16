import axios from 'axios';

const getBaseURL = () => {
  const isProduction = import.meta.env.PROD; // true em produção, false em desenvolvimento/preview
  const VITE_LOCAL_API_URL = import.meta.env.VITE_LOCAL_API_URL;
  const VITE_PRODUCTION_API_URL = import.meta.env.VITE_PRODUCTION_API_URL;
  const VITE_VERCEL_URL = import.meta.env.VITE_VERCEL_URL;
  const VITE_VERCEL_BRANCH_URL = import.meta.env.VITE_VERCEL_BRANCH_URL;

  if (isProduction && VITE_PRODUCTION_API_URL) {
    return VITE_PRODUCTION_API_URL;
  }

  if (!isProduction && VITE_VERCEL_BRANCH_URL) {
    return `https://${VITE_VERCEL_BRANCH_URL}`;
  }

  if (!isProduction && VITE_VERCEL_URL) {
    return `https://${VITE_VERCEL_URL}`;
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