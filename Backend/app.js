const express = require("express")
const cors = require("cors")
require("./config/config")
require('dotenv').config(); 
const registerRoutes = require("./routes/register.route")

let app = express()

app.use(express.json())
app.use(cors({
    origin:"http://localhost:4200", credentials:true
})) 

app.use("/register", registerRoutes);

app.listen(1000)