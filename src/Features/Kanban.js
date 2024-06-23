import React from 'react';
import { createTheme } from '@mui/material/styles'; // Adjust the import path as per your Material-UI version
import KanbanBoard from '../Components/KanbanBoard';
import { ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    h1: {
      fontSize: '3rem',
      fontWeight: 'normal',
      textAlign: 'center',
      marginBottom: '20px',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          marginTop: '12px',
          padding: '20px',
        },
      },
    },
  },
});

const Kanban = () => {
  return (
   <ThemeProvider theme={theme}>
      <div>
        <h1>Kanban Board</h1>
        <KanbanBoard />
      </div>
    </ThemeProvider>
  );
};

export default Kanban;
