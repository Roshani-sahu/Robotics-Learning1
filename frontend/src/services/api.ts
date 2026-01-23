import axios from 'axios';
import { auth } from '../config/firebase';

const API_BASE_URL = 'http://localhost:4000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use(async (config) => {
  const user = auth.currentUser;
  if (user) {
    const token = await user.getIdToken();
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  getProfile: () => api.get('/auth/profile'),
};

export const courseAPI = {
  getAllCourses: () => api.get('/courses'),
  getCourse: (courseId: string) => api.get(`/courses/${courseId}`),
  getCourseAccess: (courseId: string) => api.get(`/courses/${courseId}/access`),
  checkAccess: (courseId: string) => api.get(`/courses/${courseId}/check-access`),
};

export const paymentAPI = {
  createOrder: (courseId: string) => api.post('/payments/create-order', { courseId }),
  verifyPayment: (data: any) => api.post('/payments/verify', data),
  getUserPurchases: () => api.get('/payments/purchases'),
};

export default api;