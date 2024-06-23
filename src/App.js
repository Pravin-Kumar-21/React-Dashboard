// src/App.js
import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeContextProvider, { ThemeContext } from './contexts/ThemeContext';
import Navbar from './Components/Navbar';
import Slidebar from './Components/Slidebar';
import Chart from './Components/Chart';
import Calendar from './Features/Calendar';
import getTheme from './theme';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';

// Define the Dashboard component outside of MainContent
const Dashboard = () => {
  return (
    <div>
      <h1>Code Frequency</h1>
      <Chart />
    </div>
  );
};

const MainContent = () => {
  const { mode } = useContext(ThemeContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline />
      <Router>
        <Navbar handleDrawerToggle={handleDrawerToggle} />
        <Slidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 240px)` }, marginTop: 8 }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/calendar" element={<Calendar />} />
            {/* <Route path="/kanban" element={<Kanban />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/chart" element={<Chart />} /> */}
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <ThemeContextProvider>
      <MainContent />
    </ThemeContextProvider>
  );
};

export default App;
