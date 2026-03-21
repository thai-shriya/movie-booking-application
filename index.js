require('dotenv').config()
const express = require('express')
const pool = require('./src/config/db')
const app = express()

const moviesRoutes = require('./src/modules/movies/movies.routes');
const userRoutes = require('./src/modules/users/users.routes');
const theaterRoutes = require('./src/modules/theaters/theaters.routes');
const showsRoutes = require('./src/modules/shows/shows.routes');

app.use(express.json());
app.use(moviesRoutes);
app.use(userRoutes);
app.use(theaterRoutes);
app.use(showsRoutes);


app.listen(process.env.PORT, () => {
    console.log("Server is running on port " + process.env.PORT);
})
