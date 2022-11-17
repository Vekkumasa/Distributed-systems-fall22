import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { handleLoginModal } from '../reducers/ModalReducer';
import { logoutUser } from '../reducers/UserReducer';
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';

const Navibar = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  console.log('user', user)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Beers
          </Typography>
          {user ?
            <Button color="inherit" onClick={() => dispatch(logoutUser())}>Logout</Button>
          : 
            <Button color="inherit" onClick={() => dispatch(handleLoginModal(true))}>Login</Button>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navibar;