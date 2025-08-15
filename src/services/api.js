import axios from 'axios';

const getBaseURL = () => {
   // Vercel environment
  const { VERCEL_ENV, VERCEL_URL, VERCEL_BRANCH_URL, VITE_PRODUCTION_API_URL, VITE_LOCAL_API_URL } = import.meta.env;

  if (VERCEL_ENV) {
    if (VERCEL_ENV === 'production') {
      return VITE_PRODUCTION_API_URL || (VERCEL_URL ? `https://${VERCEL_URL}` : '');
    }
    if (VERCEL_ENV === 'preview') {
      return VERCEL_BRANCH_URL ? `https://${VERCEL_BRANCH_URL}` : (VERCEL_URL ? `https://${VERCEL_URL}` : '');
    }
  }
  // Local environment (development)
  return VITE_LOCAL_API_URL || 'http://localhost:3000';
};

const api = axios.create({
  baseURL: getBaseURL(),
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;