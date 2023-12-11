const express = require('express');
const blogRouter = require('./routes/BlogRoutes')
const connectToDB = require('./database/connectToDb');
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000

// Middleware
app.use(express.json());

// Mongodb Connection
connectToDB(process.env.MONGODB_URI);

app.use("/api/blogs", blogRouter);

app.listen(port , () => {
    console.log('Server is up and running on port : ' + port);
});

module.exports = app;