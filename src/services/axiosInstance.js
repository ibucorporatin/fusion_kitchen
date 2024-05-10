
import axios from 'axios';
import store from '../store/store';
// import {baseURL} from '../utils/constant'



const axiosInstance = axios.create({
    // baseURL,
    timeout: 10000, // Set a timeout for requests (in milliseconds)
    headers: {
      'Content-Type': 'application/json',
      // Add other headers if needed
    },
  });

// // Add an interceptor to include the token with every request
// axiosInstance.interceptors.request.use(
//   async (config) => {
//     const { token } = store.getState().auth; // Assuming you have a token in your Redux state
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;