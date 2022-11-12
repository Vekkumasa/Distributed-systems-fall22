const router = require("express").Router();
const db_interface = require("../user-db-interface")

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

router.get("/api/dbtest", async function (req,res, next) {
  const rows = await db_interface.query(
      `SELECT id, username from users`
  );
  res.json({success:true, rows});
})

module.exports = router;