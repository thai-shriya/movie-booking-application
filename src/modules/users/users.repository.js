const pool = require('../../config/db');
const queries = require('../users/users.sql');

const findAllUsers = async () => {
    const result = await pool.query(queries.SELECT_ALL_USERS);
    return result.rows;
};

const createUser = async (userData) => {
    const { name, email, password, user_type, user_status } = userData;
    const result = await pool.query(queries.ADD_USER, [name, email, password, user_type, user_status]);
    return result.rows[0];
}

const updateUser = async (id, userData) => {
    const fields = Object.keys(userData);
    if (fields.length === 0) {
        return null;
    }

    const setClauses = fields.map((field, index) => `${field} = $${index + 1}`);
    const values = fields.map((field) => userData[field]);

    const query = `UPDATE users SET ${setClauses.join(', ')} WHERE user_id = $${fields.length + 1} RETURNING *`;
    const result = await pool.query(query, [...values, id]);
    console.log('From users repo file', result);
    return result.rows[0];

};

const deleteUser = async (id) => {
    const result = await pool.query(queries.DELETE_USER, [id]);
    return result.rows[0];
};

module.exports = {
    findAllUsers,
    createUser,
    updateUser,
    deleteUser,
};