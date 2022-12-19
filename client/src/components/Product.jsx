import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { addNewProduct, increaseQuantity } from "../reducers/ShoppingCartReducer";

const useStyles = makeStyles({
  root: {
    width: 170,
    maxHeight: 340,
    marginRight: 20
  },
  centerText: {
    textAlign: 'center',
  },
  media: {
    height: 160,
  },
  overflow: {
    maxWidth: 170,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
});

const Product  = ({ product, checkout = false, quantity = 0 }) => {
  const classes = useStyles();
  const beerImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEnxz2V219trd5E3huOmY3qI7M2sNE3D3_SQ&usqp=CAU'

  const user = useSelector((state) => state.user);
  const shoppingCart = useSelector((state) => state.shoppingCart)
  const dispatch = useDispatch()

  const addProduct = (product) => {
    const checkIfProductAlreadyExists = (prod) => {
      return shoppingCart.some(p => p.product.id === prod.id)
    }

    if (checkIfProductAlreadyExists(product)) {
      dispatch(increaseQuantity(product))
    } else {
      dispatch(addNewProduct(product))
    }
  }

  return (
    <Card className={classes.root}>

      <CardActionArea>
        <CardMedia
            className={classes.media}
            image={beerImage}
          />
        <CardContent>
          <Typography className={`${classes.overflow} ${classes.centerText}`} style={{ fontSize: 16 }} gutterBottom variant="h6" component="h2">
            {product.name} <br/> {product.price}€ <br/> stock: {product.quantity}
          </Typography>
          <Typography className={`${classes.overflow} ${classes.centerText}`} variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {!checkout ?
        <CardActions>
          <Button disabled={!user} size="small" color="primary" onClick={() => addProduct(product)}>
            Add to shopping cart
          </Button>
        </CardActions>
        :
        <Typography className={`${classes.overflow} ${classes.centerText}`} variant="body2" color="textSecondary" component="p">
          Total price: {product.price * quantity}
        </Typography>
      }
    </Card>
  );
};

export default Product;
