const router = require("express").Router();
const db_interface = require("../user-db-interface")

router.get("/ping", (req,res) => {
  res.send("pong from users");
});


router.get("/api/users", async function (req,res, next) {
  const users = await db_interface.query(
      `SELECT username, password from users`
  );
  res.json(users);
})

module.exports = router;