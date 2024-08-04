// src/App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DashboardLayout from './components/DashboardLayout';
import Overview from './pages/Overview';
import Analytics from './pages/Analytics';
import Reports from './pages/Reports';
import { DashboardProvider } from './context/DashboardContext';
import theme from './theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Overview /> },
      { path: 'analytics', element: <Analytics /> },
      { path: 'reports', element: <Reports /> },
    ],
  },
]);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DashboardProvider>
        <RouterProvider router={router} />
      </DashboardProvider>
    </ThemeProvider>
  );
};

export default App;
