import axios from 'axios';

const baseURL =
  import.meta.env.VITE_PRODUCTION_API_URL && import.meta.env.MODE === 'production'
    ? import.meta.env.VITE_PRODUCTION_API_URL
    : import.meta.env.VITE_LOCAL_API_URL || 'http://localhost:3000';

const api = axios.create({ 
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;