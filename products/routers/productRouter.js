const router = require("express").Router();

let products = [
  {
    'id': 1,
    'name': 'beer',
    'price': 10
  },
  {
    'id': 2,
    'name': 'better beer',
    'price': 12
  }
]

router.get("/ping", (req,res) => {
  res.send("pong from products");
});

router.get("/api/products", (req,res) => {
  res.json(products)
})

module.exports = router;