import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const Slidebar = ({ mobileOpen, handleDrawerToggle }) => {
  return (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      sx={{
        marginTop: '5px',
        zIndex: (theme) => theme.zIndex.drawer + 2,
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 300 , backgroundColor: '#E5E9FA' },
      }}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      <List>
        <ListItem button component={Link} to="/calendar">
          <ListItemText primary="Calendar" sx={{ color: 'black' }} /> {/* Text color set to black */}
        </ListItem>
        <ListItem button component={Link} to="/kanban">
          <ListItemText primary="Kanban Board" sx={{ color: 'black' }} /> {/* Text color set to black */}
        </ListItem>
        <ListItem button component={Link} to="/customize">
          <ListItemText primary="Preferences" sx={{ color: 'black' }} /> {/* Text color set to black */}
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Slidebar;
