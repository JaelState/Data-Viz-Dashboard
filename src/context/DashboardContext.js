import React, { createContext, useReducer } from 'react';

const DashboardContext = createContext();

const initialState = {
  filter: '',
  zoom: false,
  data: [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  ], // Add raw data
  filteredData: [
    { name: 'Jan' , uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb' , uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  ], // Add filtered data
};

const dashboardReducer = (state, action) => {
    switch (action.type) {
      case 'SET_FILTER':
        // Convert both the filter string and item names to lowercase for case-insensitive comparison
        const filteredData = state.data.filter(item => 
          item.name.toLowerCase().includes(action.payload.toLowerCase())
        );
        // Update state with the new filter value and filtered data
        return { ...state, filter: action.payload, filteredData };
      case 'SET_ZOOM':
        // Update zoom state based on action payload
        return { ...state, zoom: action.payload };
      case 'SET_DATA':
        // Update data and filteredData state with new data payload
        return { ...state, data: action.payload, filteredData: action.payload };
      default:
        // Return unchanged state for unknown actions
        return state;
    }
  };
  


const DashboardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);

  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
};

export { DashboardContext, DashboardProvider };
