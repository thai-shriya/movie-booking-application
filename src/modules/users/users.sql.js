const SELECT_ALL_USERS = `SELECT * FROM USERS`;

const ADD_USER = `INSERT INTO users (name, email, password, user_type, user_status) VALUES ($1, $2, $3, $4, $5) RETURNING *`;

const DELETE_USER = `DELETE FROM USERS WHERE user_id = $1 RETURNING *`;

module.exports = {
    SELECT_ALL_USERS,
    ADD_USER,
    DELETE_USER
}