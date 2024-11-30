import axios from 'axios';

// Determine the base URL dynamically
const getBaseURL = () => {
  // Check if the app is running on localhost
  if (window.location.hostname === 'localhost') {
    return 'http://localhost:3001'; // Use localhost for PC
  } else {
    // Use the machine's IP address for mobile or other devices
    return `http://${window.location.hostname}:3001`;
  }
};

// Create an Axios instance with the dynamic base URL
const axiosInstance = axios.create({
  baseURL: getBaseURL(),
  timeout: 10000, // 10 seconds timeout
});

export default axiosInstance;
