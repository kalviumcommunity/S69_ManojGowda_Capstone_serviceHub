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
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));
app.options('*', cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));

app.use((req, res, next) => {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
    next();
});





app.use("/api",route)

app.listen(port, () => {
    console.log(`server is running on port : ${port}`);
})

