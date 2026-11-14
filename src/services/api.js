import axios from 'axios';

// Base API URL can be configured via .env (VITE_API_BASE_URL)
// Default is http://localhost:5000/api
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor: attach bearer token if present in localStorage
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('lavili_auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: handle errors centrally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Check if network error (backend server offline or unreached)
    if (!error.response) {
      console.warn(`[API Connection Note] Backend server unreachable at ${API_BASE_URL}. Using graceful fallback.`);
    } else if (error.response.status === 401) {
      // Unauthorized: clear expired token
      localStorage.removeItem('lavili_auth_token');
      localStorage.removeItem('lavili_auth_user');
    }
    return Promise.reject(error);
  }
);

export default api;
export { API_BASE_URL };

