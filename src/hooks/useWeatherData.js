// src/hooks/useWeatherData.js
import { useState, useEffect } from 'react';
import apiClient from '../services/weatherApi';

const useWeatherData = (cities) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all(cities.map(city => apiClient.get('', { params: { q: city } })));
        const weatherData = responses.map(response => response.data);
        setData(weatherData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [cities]);

  return { data, loading, error };
};

export default useWeatherData;
