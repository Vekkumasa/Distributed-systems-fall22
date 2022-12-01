import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'flex',
    paddingLeft: 15,
    paddingTop: 15,
    maxWidth: 1200
  },
});

const Checkout = () => {
  const classes = useStyles()
  const shoppingCart = useSelector(state => state.shoppingCart);
  const user = useSelector(state => state.user);

  const purchaseProducts = () => {
    console.log('not implemented')
  }

  return (
    <div>
      <div className={classes.root}>
        {shoppingCart.map(p => {
          return <Product key={p.product.id} product={p.product} checkout={true} quantity={p.quantity} />
        })}
      </div>
      <Button 
        style={{
          color: "green",
          border: "2px solid black",
          borderRadius: 20,
          fontSize: "20px",
          marginLeft: "25px",
          marginTop: "15px",
          padding: 10
        }} 
        onClick={() => purchaseProducts()} > Buy </Button>
    </div>
  )
};

export default Checkout;