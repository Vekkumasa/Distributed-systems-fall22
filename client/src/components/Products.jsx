import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from '@mui/styles';

import Product from "./Product";

const useStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'flex',
    paddingLeft: 15,
    paddingTop: 15,
    maxWidth: 1200
  },
});

const Products = () => {
  const [products, setProducts] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    axios.get('http://localhost:3001/api/products').then((res) => {
      setProducts(res.data)
    })
  }, [])

  return (
    <div className={classes.root}> 
      {products.map((p) => (
        <Product key={p.id} product={p} />
      ))}
    </div>
    
  )
}

export default Products