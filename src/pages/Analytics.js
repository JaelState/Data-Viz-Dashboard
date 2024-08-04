// src/pages/Analytics.js
import React, { useContext, useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { DashboardContext } from '../context/DashboardContext';
import WeatherChart from '../components/WeatherChart';
import { selectFilter, selectZoom, selectFilteredData } from '../context/selectors';

const Analytics = () => {
  const { state, dispatch } = useContext(DashboardContext);
  const filter = selectFilter(state);
  const zoom = selectZoom(state);
  const filteredData = selectFilteredData(state);

  const [localFilter, setLocalFilter] = useState(filter);
  const [weatherFilter, setWeatherFilter] = useState('');

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  useEffect(() => {
    setLocalFilter(filter);
  }, [filter]);

  const handleFilterChange = (event) => setLocalFilter(event.target.value);
  const handleWeatherFilterChange = (event) => setWeatherFilter(event.target.value);
  const applyFilter = () => dispatch({ type: 'SET_FILTER', payload: localFilter });
  const handleZoomToggle = () => dispatch({ type: 'SET_ZOOM', payload: !zoom });

  const pieData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Analytics</h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Filter"
          value={localFilter}
          onChange={handleFilterChange}
          className="border p-2 mr-4"
        />
        <button
  onClick={applyFilter}
  className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
>
  Apply Filter
</button>

        <button onClick={handleZoomToggle} className="bg-red-500 text-white px-4 py-2 rounded ml-4">
          {zoom ? 'Disable Zoom' : 'Enable Zoom'}
        </button>
      </div>
      <div className={`grid grid-cols-1 ${zoom ? 'md:grid-cols-1' : 'md:grid-cols-1'} gap-20`}>
      <div className={`p-4 bg-grey shadow-md ${zoom ? 'w-full h-[600px]' : 'w-full h-[300px]'}`}>
          <h2 className="text-xl font-semibold mb-4">Sales Data</h2>
          <BarChart width={zoom ? 700 : 500} height={zoom ? 600 : 300} data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </div>
        <div className={`p-4  shadow-md ${zoom ? 'w-full h-[600px]' : 'w-full h-[300px]'}`}>
          <h2 className="text-xl font-semibold mb-4">User Growth</h2>
          
          <LineChart width={zoom ? 700 : 500} height={zoom ? 600 : 300} data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
          </LineChart>
        </div>
        <div className={`p-4  shadow-md ${zoom ? 'w-full h-[600px]' : 'w-full h-[400px]'}`}>
          <h2 className="text-xl font-semibold mb-4">Market Share</h2>
          <PieChart width={zoom ? 600 : 400} height={zoom ? 600 : 400}>
            <Pie
              data={pieData}
              cx={zoom ? 300 : 200}
              cy={zoom ? 300 : 200}
              labelLine={false}
              label
              outerRadius={zoom ? 150 : 100}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
        <div className="p-4  shadow-md">
          <h2 className="text-xl font-semibold mb-4">Weather Data</h2>
          <input
            type="text"
            placeholder="Weather Filter"
            value={weatherFilter}
            onChange={handleWeatherFilterChange}
            className="border p-2 mb-4"
          />
          <WeatherChart cities={['Settat', 'London', 'Khouribga']} filter={weatherFilter} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
