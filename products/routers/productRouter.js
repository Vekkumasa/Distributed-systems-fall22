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

module.exports = router;