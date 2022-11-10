const express = require('express')
const app = express()
const cors = require('cors')
const userRouter = require("./routers/userRouter");

app.use(cors())

app.use("/", userRouter);

const PORT = 3002
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})