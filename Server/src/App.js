const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const db = require("./config/database");
const http = require("http");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");

const dotenv = require("dotenv");
dotenv.config();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again later'
});

app.use(cors({
    origin:"http://localhost:5173",
    credentials : true,
}))

app.use(express.json());
app.use(cookieParser());
app.use(limiter);
app.use(helmet());

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