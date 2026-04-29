const mongoose = require('mongoose')
const dotenv = require('dotenv');
// MONGOO_DB_URL=mongodb+srv://shivan63073_db_user:vICY7LvLlD44yxLW@edupro-cluster.v5iqz8u.mongodb.net/?appName=eduPro-cluster

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOO_DB_URL)
        console.log("Database connected ready to use")
    } catch (error) {
        console.log("Database is not connected please check error", error)
    }
}

module.exports = connectDB;