const router = require("express").Router();
const db_interface = require("../product-db-interface")


router.get("/ping", (req,res) => {
  res.send("pong from products");
});

router.get("/api/products", async function (req,res, next) {
  const products = await db_interface.query(
      `SELECT * from products`
  );
  res.json(products);
})

router.post("/api/buy", async function (req, res, next) {
  const  items  = req.body;
  sum = 0
  for ({id,quantity} of items){
    boughtquantity = quantity
    const [{price, q},] = await db_interface.query(
        `SELECT price, quantity as q from products WHERE id = ?`, [id]
    );
    if (q < boughtquantity){
      res.json("Error: buying more than available")
      return
    }
    sum += price*boughtquantity
    db_interface.query(
        `UPDATE products SET quantity = ? where id = ?`, [q-boughtquantity, id]
    )
  }
  res.json(sum);
})

module.exports = router;