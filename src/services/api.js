import axios from 'axios';

const baseURL = (() => {
  // Vercel environment
  if (import.meta.env.VERCEL_ENV) {
    if (import.meta.env.VERCEL_ENV === 'production') {
      return import.meta.env.VITE_PRODUCTION_API_URL || `https://${import.meta.env.VERCEL_URL}`;
    }
    if (import.meta.env.VERCEL_ENV === 'preview') {
      return `https://${import.meta.env.VERCEL_BRANCH_URL || import.meta.env.VERCEL_URL}`;
    }
  }
  // Local environment (development)
  return import.meta.env.VITE_LOCAL_API_URL || 'http://localhost:3000';
})();

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;