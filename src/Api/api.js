import axios from 'axios';
// axios.defaults.baseURL = 'https://ec2-100-29-38-82.compute-1.amazonaws.com';

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (
      token &&
      !config.url.includes('/api/Customer/Login') &&
      !config.url.includes('/api/Customer/AdminLogin')
    ) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      const isLoginRequest =
        error.config.url.includes('/api/Customer/Login') ||
        error.config.url.includes('/api/Customer/AdminLogin');
      console.log("heh", isLoginRequest)
      if (!isLoginRequest) {
        localStorage.removeItem('token');
        window.location.href = '/login'; 
      }
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default axios;
