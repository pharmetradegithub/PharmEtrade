import axios from 'axios';


// axios.defaults.baseURL = 'https://ec2-100-29-38-82.compute-1.amazonaws.com';

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

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
      console.log("heh", isLoginRequest)
      // For non-login requests, handle token expiration
      if (!isLoginRequest) {
        // Clear the expired token and redirect to the login page
        localStorage.removeItem('token');
        // window.location.href = '/login'; // Adjust the path to your login route if different
        // Redirect to the login page
        history.push('/login'); 
      }

      // For login requests, do not redirect or refresh
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default axios;

// newwww=====================================================
// import axios from 'axios';

// axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

// let inactivityTimer;

// // Function to handle logout
// const handleLogout = () => {
//   if (localStorage.getItem('token')) {
//     // alert("logout")
//     localStorage.removeItem('token'); // Clear token
//     window.location.href = '/login'; // Redirect to login page
//   }
// };

// // Function to reset the inactivity timer
// const resetInactivityTimer = () => {
//   clearTimeout(inactivityTimer);
//   startInactivityTimer();
// };

// // Function to start the inactivity timer
// const startInactivityTimer = (inactivityLimit = 30 * 60 * 1000) => {
//   inactivityTimer = setTimeout(() => {
//     handleLogout();
//   }, inactivityLimit);
// };

// // Set up event listeners for user activity
// const addInactivityListeners = () => {
//   const events = ['mousemove', 'keydown', 'click', 'touchstart'];
//   events.forEach((event) =>
//     window.addEventListener(event, resetInactivityTimer)
//   );
// };

// // Clean up event listeners
// const removeInactivityListeners = () => {
//   const events = ['mousemove', 'keydown', 'click', 'touchstart'];
//   events.forEach((event) =>
//     window.removeEventListener(event, resetInactivityTimer)
//   );
// };

// // Start tracking inactivity on page load
// addInactivityListeners();
// startInactivityTimer();

// // Set up Axios request interceptor to add Authorization header
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
//   (error) => Promise.reject(error)
// );

// // Set up Axios response interceptor to handle expired tokens
// axios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       const isLoginRequest =
//         error.config.url.includes('/api/Customer/Login') ||
//         error.config.url.includes('/api/Customer/AdminLogin');

//       // For non-login requests, handle token expiration
//       if (!isLoginRequest) {
//         handleLogout(); // Logout on token expiration
//       }

//       // For login requests, just reject the promise
//       return Promise.reject(error);
//     }
//     return Promise.reject(error);
//   }
// );

// // Clean up when the app is closed or navigated away
// window.addEventListener('beforeunload', () => {
//   removeInactivityListeners();
//   clearTimeout(inactivityTimer);
// });

// export default axios;========================================

// import axios from 'axios';

// axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

// let inactivityTimer;

// // Function to handle logout
// const handleLogout = () => {
//   const token = localStorage.getItem('token');
//   console.log('Logging out, token:', token); // Debugging
//   if (token) {
//     localStorage.removeItem('token'); // Clear token
//     window.location.href = '/login'; // Redirect to login page
//   }
// };

// // Function to reset the inactivity timer
// const resetInactivityTimer = () => {
//   console.log('Inactivity timer reset'); // Debugging
//   clearTimeout(inactivityTimer);
//   startInactivityTimer();
// };

// // Function to start the inactivity timer
// const startInactivityTimer = (inactivityLimit = 30 * 60 * 1000) => {
//   console.log('Starting inactivity timer for', inactivityLimit, 'ms'); // Debugging
//   inactivityTimer = setTimeout(() => {
//     handleLogout();
//   }, inactivityLimit);
// };

// // Set up event listeners for user activity
// const addInactivityListeners = () => {
//   const events = ['mousemove', 'keydown', 'click', 'touchstart'];
//   events.forEach((event) =>
//     window.addEventListener(event, resetInactivityTimer)
//   );
// };

// // Clean up event listeners
// const removeInactivityListeners = () => {
//   const events = ['mousemove', 'keydown', 'click', 'touchstart'];
//   events.forEach((event) =>
//     window.removeEventListener(event, resetInactivityTimer)
//   );
// };

// // Start tracking inactivity on page load
// addInactivityListeners();
// startInactivityTimer();

// // Set up Axios request interceptor to add Authorization header
// axios.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     console.log('Request URL:', config.url, 'Token:', token); // Debugging
//     if (
//       token &&
//       !config.url.includes('/api/Customer/Login') &&
//       !config.url.includes('/api/Customer/AdminLogin')
//     ) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Set up Axios response interceptor to handle expired tokens
// axios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.error('Response error:', error.response); // Debugging
//     if (error.response && error.response.status === 401) {
//       const isLoginRequest =
//         error.config.url.includes('/api/Customer/Login') ||
//         error.config.url.includes('/api/Customer/AdminLogin');

//       if (!isLoginRequest) {
//         console.log('Token expired, logging out'); // Debugging
//         handleLogout();
//       }

//       return Promise.reject(error);
//     }
//     return Promise.reject(error);
//   }
// );

// // Clean up when the app is closed or navigated away
// window.addEventListener('beforeunload', () => {
//   removeInactivityListeners();
//   clearTimeout(inactivityTimer);
// });

// export default axios;


// import axios from 'axios';

// // Set Axios base URL from environment variables
// axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

// let inactivityTimer;

// Logout user
// const handleLogout = () => {
//   const token = localStorage.getItem('token'); // Using localStorage for token management
//   // console.log('Logging out, token:', token);
//   if (token) {
//     localStorage.removeItem('token');
//     // If using a routing library like react-router-dom, replace this with navigate('/login');
//     window.location.href = '/login';
//   }
// };

// const handleLogout = () => {
//   const token = localStorage.getItem('token'); // Using localStorage for token management

//   if (token) {
//     localStorage.removeItem('token'); // Clear the token from localStorage

//     // Get the current path
//     const currentPath = window.location.pathname;

//     // Check if the user is on an admin path
//     if (currentPath.startsWith('/pharmEtradeadmin')) {
//       // Redirect to the admin login page
//       window.location.href = '/loginadminEtrade';
//     } else {
//       // Redirect to the regular login page
//       window.location.href = '/login';
//     }
//   }
// };

// // Reset inactivity timer
// const resetInactivityTimer = () => {
//   // console.log('Resetting inactivity timer...');
//   clearTimeout(inactivityTimer);
//   startInactivityTimer();
// };

// // Start inactivity timer
// const startInactivityTimer = (inactivityLimit = 30 * 60 * 1000) => {
//   // console.log('Starting inactivity timer for', inactivityLimit, 'ms');
//   inactivityTimer = setTimeout(() => {
//     // console.log('Inactivity limit reached, logging out...');
//     handleLogout();
//   }, inactivityLimit);
// };

// // Add listeners for user interactions
// const addInactivityListeners = () => {
//   console.log('Adding inactivity listeners...');
//   const userActivityEvents = ['mousemove', 'keydown', 'click', 'touchstart'];
//   const debouncedReset = debounce(resetInactivityTimer, 200); // Debounce with 200ms delay
//   userActivityEvents.forEach((event) =>
//     document.addEventListener(event, debouncedReset)
//   );
// };

// // Remove listeners for user interactions
// const removeInactivityListeners = () => {
//   console.log('Removing inactivity listeners...');
//   const userActivityEvents = ['mousemove', 'keydown', 'click', 'touchstart'];
//   userActivityEvents.forEach((event) =>
//     document.removeEventListener(event, resetInactivityTimer)
//   );
// };

// // Debounce helper function
// const debounce = (func, delay) => {
//   let timeout;
//   return (...args) => {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func(...args), delay);
//   };
// };

// // Axios interceptors for API requests
// axios.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token'); // Using localStorage for tokens
//     // console.log('Request URL:', config.url, 'Token:', token);
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
//     console.error('Request error:', error);
//     return Promise.reject(error);
//   }
// );

// // Axios interceptors for responses
// axios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.error('Response error:', error.response);
//     if (error.response) {
//       const isLoginRequest =
//         error.config.url.includes('/api/Customer/Login') ||
//         error.config.url.includes('/api/Customer/AdminLogin');

//       if (error.response.status === 401 && !isLoginRequest) {
//         // console.log('Token expired, logging out...');
//         handleLogout();
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// // Start tracking inactivity
// addInactivityListeners();
// startInactivityTimer();

// // Cleanup when app closes
// window.addEventListener('beforeunload', () => {
//   // console.log('Cleaning up before unload...');
//   removeInactivityListeners();
//   clearTimeout(inactivityTimer);
// });

// export default axios;
