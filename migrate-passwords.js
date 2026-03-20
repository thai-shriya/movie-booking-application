require('dotenv').config();
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');

const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

async function migratePasswords() {
    console.log("Starting password migration...");
    try {
        // Fetch all users
        const result = await pool.query('SELECT user_id, password FROM users');
        const users = result.rows;

        let updatedCount = 0;

        for (const user of users) {
            // bcrypt hashes generally start with $2a$, $2b$, or $2y$
            if (!user.password.startsWith('$2')) {
                console.log(`Migrating password for user_id: ${user.user_id}`);
                const hashedPassword = await bcrypt.hash(user.password, 10);
                await pool.query('UPDATE users SET password = $1 WHERE user_id = $2', [hashedPassword, user.user_id]);
                updatedCount++;
            }
        }

        console.log(`\nMigration complete! Successfully hashed ${updatedCount} plain-text passwords.`);
    } catch (err) {
        console.error("Migration failed:", err);
    } finally {
        pool.end();
    }
}

migratePasswords();
