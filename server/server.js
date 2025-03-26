const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const connectDB = require('./dataBase')
const route = require('./routes/route')
require('dotenv').config({ path: './config/.env' })

const app = express();
const port = process.env.PORT || 3010

connectDB();

app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials : true}))

app.use("/api",route)

app.listen(port, () => {
    console.log(`server is running on port : ${port}`);
})

