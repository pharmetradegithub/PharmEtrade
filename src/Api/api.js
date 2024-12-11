// import axios from 'axios';


// // axios.defaults.baseURL = 'https://ec2-100-29-38-82.compute-1.amazonaws.com';

// axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

// // Set up request interceptor to add Authorization header
// axios.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     if (
//       token &&
//       !config.url.includes('/api/Customer/Login') &&
//       !config.url.includes('/api/Customer/AdminLogin')
//     ) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Set up response interceptor to handle expired tokens
// axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       const isLoginRequest =
//         error.config.url.includes('/api/Customer/Login') ||
//         error.config.url.includes('/api/Customer/AdminLogin');
//       console.log("heh",isLoginRequest)
//       // For non-login requests, handle token expiration
//       if (!isLoginRequest) {
//         // Clear the expired token and redirect to the login page
//         localStorage.removeItem('token');
//         window.location.href = '/login'; // Adjust the path to your login route if different
//       }

//       // For login requests, do not redirect or refresh
//       return Promise.reject(error);
//     }
//     return Promise.reject(error);
//   }
// );

// export default axios;



import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

let inactivityTimer;

// Function to handle logout
const handleLogout = () => {
  if (localStorage.getItem('token')) {
    // alert("logout")
    localStorage.removeItem('token'); // Clear token
    window.location.href = '/login'; // Redirect to login page
  }
};

// Function to reset the inactivity timer
const resetInactivityTimer = () => {
  clearTimeout(inactivityTimer);
  startInactivityTimer();
};

// Function to start the inactivity timer
const startInactivityTimer = (inactivityLimit = 30 * 60 * 1000) => {
  inactivityTimer = setTimeout(() => {
    handleLogout();
  }, inactivityLimit);
};

// Set up event listeners for user activity
const addInactivityListeners = () => {
  const events = ['mousemove', 'keydown', 'click', 'touchstart'];
  events.forEach((event) =>
    window.addEventListener(event, resetInactivityTimer)
  );
};

// Clean up event listeners
const removeInactivityListeners = () => {
  const events = ['mousemove', 'keydown', 'click', 'touchstart'];
  events.forEach((event) =>
    window.removeEventListener(event, resetInactivityTimer)
  );
};

// Start tracking inactivity on page load
addInactivityListeners();
startInactivityTimer();

// Set up Axios request interceptor to add Authorization header
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
  (error) => Promise.reject(error)
);

// Set up Axios response interceptor to handle expired tokens
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      const isLoginRequest =
        error.config.url.includes('/api/Customer/Login') ||
        error.config.url.includes('/api/Customer/AdminLogin');

      // For non-login requests, handle token expiration
      if (!isLoginRequest) {
        handleLogout(); // Logout on token expiration
      }

      // For login requests, just reject the promise
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

// Clean up when the app is closed or navigated away
window.addEventListener('beforeunload', () => {
  removeInactivityListeners();
  clearTimeout(inactivityTimer);
});

export default axios;
