const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes')
const app = express();
const PORT = 5000


app.use(cors({ origin: "http://localhost:5000" }));
app.use(express.json())
app.use('/auth', authRoutes)


app.listen(PORT, console.log(`server is running on port http://localhost:${PORT}`))