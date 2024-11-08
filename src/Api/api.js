import axios from 'axios';

axios.defaults.baseURL = 'https://ec2-100-29-38-82.compute-1.amazonaws.com';

// Set up request interceptor to add Authorization header
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

// Set up response interceptor to handle expired tokens
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      const isLoginRequest =
        error.config.url.includes('/api/Customer/Login') ||
        error.config.url.includes('/api/Customer/AdminLogin');
      console.log("heh",isLoginRequest)
      // For non-login requests, handle token expiration
      if (!isLoginRequest) {
        // Clear the expired token and redirect to the login page
        localStorage.removeItem('token');
        window.location.href = '/login'; // Adjust the path to your login route if different
      }

      // For login requests, do not redirect or refresh
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default axios;
