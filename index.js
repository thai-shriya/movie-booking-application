require('dotenv').config()
const express = require('express')
const pool = require('./src/config/db')
const app = express()

const moviesRoutes = require('./src/modules/movies/movies.routes')
const userRoutes = require('./src/modules/users/users.routes')

app.use(express.json())
app.use(moviesRoutes)
app.use(userRoutes)

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(process.env.PORT, () => {
    console.log("Server is running on port " + process.env.PORT);
})
