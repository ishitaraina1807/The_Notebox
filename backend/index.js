const connectToMongo = require("./db")
const express = require("express")
const app = express()
const port = 5000
var cors = require('cors')

//Available routes 
app.use(cors())
app.use(express.json())

app.use("/api/auth", require("./routes/auth"))
app.use("/api/notes", require("./routes/notes"))

app.listen(port, () => {
  console.log(`Notebox-backend listening on port ${port}`)
})
connectToMongo();