import axios from 'axios';

const getBaseURL = () => {
  const VITE_LOCAL_API_URL = import.meta.env.VITE_LOCAL_API_URL;
  const VITE_PRODUCTION_API_URL = import.meta.env.VITE_PRODUCTION_API_URL;
  const VITE_VERCEL_URL = import.meta.env.VITE_VERCEL_URL;
  const VITE_VERCEL_BRANCH_URL = import.meta.env.VITE_VERCEL_BRANCH_URL;

  console.log('VITE_LOCAL_API_URL:', VITE_LOCAL_API_URL);
  console.log('VITE_PRODUCTION_API_URL:', VITE_PRODUCTION_API_URL);
  console.log('VITE_VERCEL_URL:', VITE_VERCEL_URL);
  console.log('VITE_VERCEL_BRANCH_URL:', VITE_VERCEL_BRANCH_URL);

  // Produção Vercel
  if (VITE_PRODUCTION_API_URL) return VITE_PRODUCTION_API_URL;

  // Preview / Workspace Vercel
  if (VITE_VERCEL_BRANCH_URL) return `https://${VITE_VERCEL_BRANCH_URL}`;
  if (VITE_VERCEL_URL) return `https://${VITE_VERCEL_URL}`;

  // Local / fallback
  return VITE_LOCAL_API_URL || 'http://localhost:3000';
};

const api = axios.create({
  baseURL: getBaseURL(),
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;