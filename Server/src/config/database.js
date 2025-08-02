const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const db = async ()=>{
    await mongoose.connect(process.env.MONGODB_SECRET_KEY)
}

module.exports = db;