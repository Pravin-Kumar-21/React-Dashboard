import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#66BB6A',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
});





const getTheme = (mode) => {
  switch (mode) {
    case 'dark':
      return darkTheme;
    default:
      return lightTheme;
  }
};

export default getTheme;
