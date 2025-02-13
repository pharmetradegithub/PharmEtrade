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

// axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;

//     // Check if the error is due to an expired token
//     if (error.response && error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true; // Mark the request as retried

//       const isLoginRequest =
//         originalRequest.url.includes('/api/Customer/Login') ||
//         originalRequest.url.includes('/api/Customer/AdminLogin');

//       if (!isLoginRequest) {
//         try {
//           // Get the refresh token from localStorage
//           const refreshToken = localStorage.getItem('refreshToken');
//           if (refreshToken) {
//             // Call the refresh token API
//             const refreshResponse = await axios.post(`/api/Customer/RefreshToken?token=${refreshToken}`);

//             // Update the token in localStorage
//             const newToken = refreshResponse.data.token;
//             localStorage.setItem('token', newToken);

//             // Retry the original request with the new token
//             originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
//             return axios(originalRequest);
//           } else {
//             // If no refresh token is available, redirect to login
//             localStorage.removeItem('token');
//             localStorage.removeItem('refreshToken');
//             window.location.href = '/login';
//           }
//         } catch (refreshError) {
//           // Handle errors during token refresh
//           console.error('Refresh token failed', refreshError);
//           localStorage.removeItem('token');
//           localStorage.removeItem('refreshToken');
//           window.location.href = '/login';
//           return Promise.reject(refreshError);
//         }
//       }
//     }

//     return Promise.reject(error);
//   }
// );

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      const isLoginRequest =
        error.config.url.includes('/api/Customer/Login') ||
        error.config.url.includes('/api/Customer/AdminLogin');
      // console.log("heh", isLoginRequest)
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




// import axios from 'axios';
// // axios.defaults.baseURL = 'https://ec2-100-29-38-82.compute-1.amazonaws.com';

// axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

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
// axios.interceptors.response.use(
//   (response) => {
//     // Check if the response contains a statusCode indicating an error, even if HTTP status is 200
//     if (response.data && response.data.statusCode && response.data.statusCode !== 200) {
//       const { statusCode, message } = response.data;
//       switch (statusCode) {
//         case 400:
//           alert('Error 400: Bad Request. Please check your input.');
//           break;
//         case 403:
//           alert('Error 403: Forbidden. You do not have the necessary permissions.');
//           break;
//         case 500:
//           alert('Error 500: Internal Server Error. Please try again later.');
//           break;
//         default:
//           alert(`Error (Code: ${statusCode}): ${message || 'Unknown error.'}`);
//       }
//       // Reject the promise to indicate an error in the response body
//       return Promise.reject(new Error(`Error (Code: ${statusCode}): ${message || 'Unknown error.'}`));
//     }
//     // Return the response if everything is fine
//     return response;
//   },
//   (error) => {
//     if (error.response) {
//       const { status, data } = error.response;

//       if (status === 401) {
//         const isLoginRequest =
//           error.config.url.includes('/api/Customer/Login') ||
//           error.config.url.includes('/api/Customer/AdminLogin');
//         if (!isLoginRequest) {
//           localStorage.removeItem('token');
//           window.location.href = '/login';
//         }
//         return Promise.reject(error);
//       }

//       console.log(status, data, data.statusCode, "StatusErrors");
//       if (data && data.statusCode) {
//         switch (data.statusCode) {
//           case 400:
//             alert('Error 400: Bad Request. Please check your input.');
//             break;
//           case 403:
//             alert('Error 403: Forbidden. You do not have the necessary permissions.');
//             break;
//           case 502:
//             alert('Error 502: Server is busy, try again later.');
//             break;
//           default:
//             alert(`Error (Code: ${data.statusCode}): ${data.message || 'Unknown error.'}`);
//         }
//       }

//       // Handle additional HTTP status codes
//       switch (status) {
//         case 400:
//           alert('HTTP 400: Bad Request. Please check your input.');
//           break;
//         case 403:
//           alert('HTTP 403: Forbidden. You do not have the necessary permissions.');
//           break;
//         case 404:
//           alert('HTTP 404: Not Found. The requested resource could not be found.');
//           break;
//         case 500:
//           alert('HTTP 500: Internal Server Error. Please try again later.');
//           break;
//         default:
//           alert(`Unhandled HTTP Error (Status: ${status}): ${data?.message || 'Unknown error.'}`);
//       }
//     }

//     return Promise.reject(error);
//   }
// );



// export default axios;
