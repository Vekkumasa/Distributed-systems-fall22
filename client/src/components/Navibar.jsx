import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { handleLoginModal } from '../reducers/ModalReducer';
import { logoutUser } from '../reducers/UserReducer';
import { clearShoppingCart } from '../reducers/ShoppingCartReducer';
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Menu, ShoppingCart } from '@mui/icons-material';

const Navibar = ({checkoutPageOpen, setCheckoutPageOpen}) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  const logout = () => {
    dispatch(logoutUser())
    dispatch(clearShoppingCart())
  }

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
            onClick={() => setCheckoutPageOpen(false)}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Beers
          </Typography>
          {user ?
            <div>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => setCheckoutPageOpen(true)}
              >
                <ShoppingCart />
              </IconButton>
              <Button color="inherit" onClick={() => logout()}>Logout</Button>
            </div>
          : 
            <Button color="inherit" onClick={() => dispatch(handleLoginModal(true))}>Login</Button>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navibar;