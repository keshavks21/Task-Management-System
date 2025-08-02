const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const db = require("./config/database");
const http = require("http");

const dotenv = require("dotenv");
dotenv.config();

app.use(cors({
    origin:"http://localhost:5173",
    credentials : true,
}))

app.use(express.json());
app.use(cookieParser())

const server = http.createServer(app);

db().
then(()=>{
    console.log("Database connected successfully");
    server.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.error("Database connection failed:");
    process.exit(1)
})