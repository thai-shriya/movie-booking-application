const pool = require('../../config/db');
const queries = require('./theaters.sql');

const findAllTheaters = async () => {
    const result = await pool.query(queries.SELECT_ALL_THEATERS);
    return result.rows;
};

const createTheater = async (theaterData) => {
    const { name, location, capacity } = theaterData;
    const result = await pool.query(queries.INSERT_THEATER, [name, location, capacity]);
    return result.rows[0];
};

const updateTheater = async (id, theaterData) => {
    const fields = Object.keys(theaterData);
    if (fields.length === 0) {
        return null;
    }
    const setClauses = fields.map((field, index) => `${field} = $${index + 1}`);
    const values = fields.map((field) => theaterData[field]);

    const query = `UPDATE theaters SET ${setClauses.join(', ')} WHERE theater_id = $${fields.length + 1} RETURNING *`;
    const result = await pool.query(query, [...values, id]);
    return result.rows[0];
};

const deleteTheater = async (id) => {
    const result = await pool.query(queries.DELETE_THEATER, [id]);
    return result.rows[0];
};

module.exports = {
    findAllTheaters,
    createTheater,
    updateTheater,
    deleteTheater,
};
