const router = require("express").Router();
const db_interface = require("../user-db-interface")

router.get("/users/ping", (req,res) => {
  res.send("pong from users");
});

router.get("/users", async function (req,res, next) {
  const users = await db_interface.query(
      `SELECT username, password from users`
  );
  res.json(users);
})

router.post("/users", async function (req, res, next) {
  console.log('body', req.body)
  const { username, password } = req.body;
  const user = await db_interface.query(
      `SELECT username from users WHERE username = ? AND password = ?`, [username, password]
  );
  res.json(user);
})

module.exports = router;