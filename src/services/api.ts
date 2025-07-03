// services/api.ts
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5281', // כתובת הבסיס
  headers: {
    'Content-Type': 'application/json',
  },
});
