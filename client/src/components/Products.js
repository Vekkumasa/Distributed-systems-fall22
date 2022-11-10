import React, { useState, useEffect } from "react";
import axios from "axios";

import Product from "./Product";


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/products').then((res) => {
      setProducts(res.data)
    })
  }, [])

  return (
    <div> 
      {products.map((p) => (
        <Product key={p.id} product={p} />
      ))}
    </div>
    
  )
}

export default Products