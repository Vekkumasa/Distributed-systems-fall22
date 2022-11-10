const router = require("express").Router();

let users = [
  {
    'id': 1,
    'username': 'admin',
    'password': 'admin'
  },
  {
    'id': 2,
    'username': 'user',
    'password': 'user'
  }
]

router.get("/ping", (req,res) => {
  res.send("pong from users");
});

router.get("/api/users", (req,res) => {
  res.json(users)
})

module.exports = router;