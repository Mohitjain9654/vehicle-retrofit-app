// src/services/vehicleService.js
import axios from 'axios';

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5050';

export const submitVehicleData = (data) => {
  return axios.post(`${API}/api/vehicle`, data);
};
