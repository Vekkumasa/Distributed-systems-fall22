import React from "react";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';


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


const Product  = ({ product }) => {
  const classes = useStyles();
  const beerImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEnxz2V219trd5E3huOmY3qI7M2sNE3D3_SQ&usqp=CAU'

  return (
    <Card className={classes.root}>

      <CardActionArea onClick={() => console.log('clicked')}>
        <CardMedia
            className={classes.media}
            image={beerImage}
          />
        <CardContent>
          <Typography className={`${classes.overflow} ${classes.centerText}`} style={{ fontSize: 16 }} gutterBottom variant="h6" component="h2">
            {product.name} <br/> {product.price}€ 
          </Typography>
          <Typography className={`${classes.overflow} ${classes.centerText}`} variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button disabled={product.stock <= 0} size="small" color="primary" onClick={() => console.log('Add product')}>
          Add to shopping cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
