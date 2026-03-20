const pool = require('../../config/db');
const queries = require('../users/users.sql');
const bycrypt = require('bcryptjs');


//hash password logic separate from create user method
const encryptPassword = async (password) => {
    const hashpassword = await bycrypt.hash(password, 10);
    return hashpassword;
}

const checkPassword = async (plainPassword, hashPassword) => {
    const isMatch = await bycrypt.compare(plainPassword, hashPassword);
    return isMatch;
}

const validateUserCreds = async (email, password) => {
    const query = 'SELECT * FROM users WHERE email=$1';
    const result = await pool.query(query, [email]);

    if (result.rows.length === 0) {
        return "Email does not exist";
    }

    const user = result.rows[0];
    const isMatch = await checkPassword(password, user.password);

    if (!isMatch) {
        return "Incorrect password";
    }

    return user;
};

const findAllUsers = async () => {
    const result = await pool.query(queries.SELECT_ALL_USERS);
    return result.rows;
};

const createUser = async (userData) => {
    const { name, email, password, user_type, user_status } = userData;
    const hashed_password = await encryptPassword(password);
    const result = await pool.query(queries.ADD_USER, [name, email, hashed_password, user_type, user_status]);
    return result.rows[0];
}

const updateUser = async (id, userData) => {
    // If the password is being updated, encrypt it before saving
    if (userData.password) {
        userData.password = await encryptPassword(userData.password);
    }

    const fields = Object.keys(userData);
    if (fields.length === 0) {
        return null;
    }
    const setClauses = fields.map((field, index) => `${field} = $${index + 1}`);
    const values = fields.map((field) => userData[field]);

    const query = `UPDATE users SET ${setClauses.join(', ')} WHERE user_id = $${fields.length + 1} RETURNING *`;
    const result = await pool.query(query, [...values, id]);
    return result.rows[0];

};

const deleteUser = async (id) => {
    const result = await pool.query(queries.DELETE_USER, [id]);
    return result.rows[0];
};

module.exports = {
    encryptPassword,
    checkPassword,
    validateUserCreds,
    findAllUsers,
    createUser,
    updateUser,
    deleteUser,
};