const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/dbConnect');
const authRoutes = require('./routes/authRoutes');


const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT

app.use(cors({ origin: "http://localhost:5000" }));

// Mongoo DB connection
connectDB();

app.use(express.json())
app.use('/auth', authRoutes)



app.listen(PORT, console.log(`server is running on port http://localhost:${PORT}`))