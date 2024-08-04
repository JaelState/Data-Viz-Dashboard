// src/services/weatherApi.js
import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const apiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: process.env.REACT_APP_OPENWEATHERMAP_API_KEY,
    units: 'Celsius', // Example: Metric units (Celsius)
  },
});

export default apiClient;
