const express = require('express')
const app = express()
const cors = require('cors')
const productRouter = require("./routers/productRouter");

app.use(cors())
app.use(express.json())

app.use("/", productRouter);

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})