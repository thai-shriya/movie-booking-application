const { Pool } = require('pg')

const pool = new Pool({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    max: 5,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000,
})

// Test the connection
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Database connection failed:', err.message)
    } else {
        console.log('Database connected successfully at:', res.rows[0].now)
    }
})

module.exports = pool
