// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5050/api'; // Change this if your backend URL is different

// Function to send the manual entry data to the backend
export const submitManualEntry = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/manual-entry`, formData);
    return response.data; // Returning the response data (you can use this in the component)
  } catch (error) {
    console.error('Error while submitting data:', error.response || error.message);
    throw error; // Throw the error so you can handle it in your component
  }
};
