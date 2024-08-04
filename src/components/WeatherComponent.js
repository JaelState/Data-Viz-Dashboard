// src/components/WeatherComponent.js
import React from 'react';
import useWeatherData from '../hooks/useWeatherData';

const WeatherComponent = ({ city }) => {
  const { data, loading, error } = useWeatherData(city);

  if (loading) return <div className="flex justify-center items-center"><div className="loader"></div></div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4 mt-4 bg-white shadow-md">
      <h2 className="text-lg font-bold">Weather in {data.name}</h2>
      <p>Temperature: {data.main.temp} °C</p>
      <p>Description: {data.weather[0].description}</p>
    </div>
  );
};

export default WeatherComponent;
