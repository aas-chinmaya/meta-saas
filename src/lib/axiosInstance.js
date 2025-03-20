// import axios from 'axios';

// const axiosInstance = axios.create({
  //   baseURL: 'https://graph.facebook.com/v22.0/581400318386041',
  //   headers: {
    //     'Content-Type': 'application/json',
//   },
// });

// export default axiosInstance;





// utils/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://graph.facebook.com/v22.0/581400318386041', // Add to your .env file
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Example: Add token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
