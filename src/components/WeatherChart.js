import React, { useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { DashboardContext } from '../context/DashboardContext';
import useWeatherData from '../hooks/useWeatherData';
import { selectZoom } from '../context/selectors';

const WeatherChart = ({ cities, filter }) => {
  const { state, dispatch } = useContext(DashboardContext);
  const { data, loading, error } = useWeatherData(cities);
  const zoom = selectZoom(state);

  if (loading) return <div className="flex justify-center items-center h-64"><div className="loader"></div></div>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  let chartData = data.map((weather) => ({
    name: weather.name,
    temperature: weather.main.temp,
    humidity: weather.main.humidity,
  }));

  if (filter) {
    chartData = chartData.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
  }

  const temperatures = chartData.map(d => d.temperature);
  const minTemp = Math.min(...temperatures) - 1;
  const maxTemp = Math.max(...temperatures) + 1;

  const humidities = chartData.map(d => d.humidity);
  const minHumidity = Math.min(...humidities) - 5;
  const maxHumidity = Math.max(...humidities) + 5;

  const handleZoomToggle = () => {
    dispatch({ type: 'SET_ZOOM', payload: !state.zoom });
  };

  return (
    <div className="p-8 mt-4 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">Weather Data</h2>
        <button
          onClick={handleZoomToggle}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          {zoom ? 'Disable Zoom' : 'Enable Zoom'}
        </button>
      </div>
      <div className="overflow-x-auto">
        <BarChart
          width={zoom ? 1000 : 500}
          height={zoom ? 600 : 300}
          data={chartData}
          className="mx-auto"
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis 
            dataKey="name" 
            tick={{ fill: 'gray' }} 
            tickLine={false}
            axisLine={{ stroke: 'gray' }} 
          />
          <YAxis
            yAxisId="left"
            domain={[minTemp, maxTemp]}
            tickCount={10}
            tick={{ fill: 'gray' }}
            tickLine={false}
            axisLine={{ stroke: 'gray' }}
            label={{
              value: 'Temperature (°C)',
              angle: -90,
              position: 'insideLeft',
              offset: -12,
              style: { fill: 'gray' }
            }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[minHumidity, maxHumidity]}
            tickCount={10}
            tick={{ fill: 'gray' }}
            tickLine={false}
            axisLine={{ stroke: 'gray' }}
            label={{
              value: 'Humidity (%)',
              angle: -90,
              position: 'insideRight',
              offset: 20,
              style: { fill: 'gray' }
            }}
          />
          <Tooltip 
            wrapperStyle={{ backgroundColor: 'red', borderColor: 'red' }}
            contentStyle={{ color: 'black' }}
            cursor={{ fill: '#dbeafe' }}
          />
          <Legend 
            wrapperStyle={{ color: 'gray' }}
          />
          <Bar yAxisId="left" dataKey="temperature" fill="#8884d8" barSize={20} />
          <Bar yAxisId="right" dataKey="humidity" fill="#82ca9d" barSize={20} />
        </BarChart>
      </div>
    </div>
  );
};

export default WeatherChart;
