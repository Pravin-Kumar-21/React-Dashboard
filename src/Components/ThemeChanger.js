import React, { useContext } from 'react';
import { Select, MenuItem, FormControl, Typography } from '@mui/material'; // Include Typography for consistent styling
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeSwitcher = () => {
  const { mode, setMode } = useContext(ThemeContext);

  const handleChange = (event) => {
    setMode(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <Typography variant="h6" color="primary">Theme</Typography>
      <Select value={mode} onChange={handleChange}>
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ThemeSwitcher;
