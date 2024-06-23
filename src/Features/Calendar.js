// src/components/Calendar.js
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Container, Typography, Card, CardContent } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

const events = [
  { title: 'Event 1', date: '2024-06-01', color: '#FF6347' },
  { title: 'Event 2', date: '2024-06-07', color: '#1E90FF' },
  { title: 'Event 3', date: '2024-06-15', color: '#32CD32' },
  { title: 'Event 4', date: '2024-06-22', color: '#FFD700' },
];

const Calendar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="h1" color="primary">
            Calendar
        </Typography>
        <Card>
          <CardContent>
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              events={events}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay',
              }}
              eventTextColor="#fff"
            />
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default Calendar;
