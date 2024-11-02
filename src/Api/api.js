import axios from 'axios';

axios.defaults.baseURL = 'http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/';

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token && !config.url.includes('/api/Customer/Login') && !config.url.includes('/api/Customer/AdminLogin')) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
