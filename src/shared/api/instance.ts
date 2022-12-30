import axios from 'axios';
import { toast } from 'react-toastify';

export const BASE_URL = 'https://tz-lotus-backend.onrender.com/api';
export const instance = axios.create({ baseURL: BASE_URL });

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.data?.status?.notifyMessage) {
      toast.error(error.response.data.status.notifyMessage);
    }
    return Promise.reject(error);
  },
);
