require('dotenv').config()
const express = require('express')
const pool = require('./src/config/db')
const app = express()



// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(process.env.PORT, () => {
    console.log("Server is running on port " + process.env.PORT);
})
