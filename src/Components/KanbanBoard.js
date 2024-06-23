import React, { useState } from 'react';
import { Grid, Paper, Typography, Box, IconButton, Divider } from '@mui/material';
import { styled } from '@mui/material/styles'; 
import AddIcon from '@mui/icons-material/Add';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

const useStyles = styled((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  column: {
    padding: theme.spacing(2),
    backgroundColor: '#f0f0f0',
    minHeight: '200px',
  },
  columnHeader: {
    marginBottom: theme.spacing(2),
  },
  card: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2),
    backgroundColor: '#fff',
    boxShadow: theme.shadows[1],
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addCardButton: {
    marginTop: theme.spacing(1),
    textAlign: 'center',
  },
  dragIndicator: {
    cursor: 'grab',
    marginRight: theme.spacing(1),
    color: '#888',
  },
}));

const KanbanBoard = () => {
  const classes = useStyles();
  const [cards, setCards] = useState({
    todo: [
      { id: 1, title: 'Task 1' },
      { id: 2, title: 'Task 2' },
    ],
    inProgress: [
      { id: 3, title: 'Task 3' },
    ],
    done: [
      { id: 4, title: 'Task 4' },
    ],
  });

  const handleDragStart = (e, cardId, status) => {
    e.dataTransfer.setData('cardId', cardId);
    e.dataTransfer.setData('status', status);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetStatus) => {
    const cardId = e.dataTransfer.getData('cardId');
    const status = e.dataTransfer.getData('status');

    if (status !== targetStatus) {
      const updatedCards = { ...cards };
      const cardToMove = updatedCards[status].find((card) => card.id.toString() === cardId);
      updatedCards[status] = updatedCards[status].filter((card) => card.id.toString() !== cardId);
      updatedCards[targetStatus] = [...updatedCards[targetStatus], cardToMove];
      setCards(updatedCards);
    }
  };

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12} md={4}>
        <Paper className={classes.column}>
          <Typography variant="h6" className={classes.columnHeader}>
            To Do
          </Typography>
          {cards.todo.map((card) => (
            <Paper
              key={card.id}
              className={classes.card}
              draggable
              onDragStart={(e) => handleDragStart(e, card.id, 'todo')}
            >
              <Box display="flex" alignItems="center">
                <DragIndicatorIcon className={classes.dragIndicator} />
                <Typography variant="body1">{card.title}</Typography>
              </Box>
            </Paper>
          ))}
          <Divider />
          <div className={classes.addCardButton}>
            <IconButton color="primary" aria-label="add card">
              <AddIcon />
            </IconButton>
            <Typography variant="body2" color="textSecondary">
              Add a card
            </Typography>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper className={classes.column} onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'inProgress')}>
          <Typography variant="h6" className={classes.columnHeader}>
            In Progress
          </Typography>
          {cards.inProgress.map((card) => (
            <Paper
              key={card.id}
              className={classes.card}
              draggable
              onDragStart={(e) => handleDragStart(e, card.id, 'inProgress')}
            >
              <Box display="flex" alignItems="center">
                <DragIndicatorIcon className={classes.dragIndicator} />
                <Typography variant="body1">{card.title}</Typography>
              </Box>
            </Paper>
          ))}
          <Divider />
          <div className={classes.addCardButton}>
            <IconButton color="primary" aria-label="add card">
              <AddIcon />
            </IconButton>
            <Typography variant="body2" color="textSecondary">
              Add a card
            </Typography>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper className={classes.column} onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'done')}>
          <Typography variant="h6" className={classes.columnHeader}>
            Done
          </Typography>
          {cards.done.map((card) => (
            <Paper
              key={card.id}
              className={classes.card}
              draggable
              onDragStart={(e) => handleDragStart(e, card.id, 'done')}
            >
              <Box display="flex" alignItems="center">
                <DragIndicatorIcon className={classes.dragIndicator} />
                <Typography variant="body1">{card.title}</Typography>
              </Box>
            </Paper>
          ))}
          <Divider />
          <div className={classes.addCardButton}>
            <IconButton color="primary" aria-label="add card">
              <AddIcon />
            </IconButton>
            <Typography variant="body2" color="textSecondary">
              Add a card
            </Typography>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default KanbanBoard;
