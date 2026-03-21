const pool = require('../../config/db');
const queries = require('./shows.sql');

const findAllShows = async () => {
    // You could also do a JOIN here if you wanted the nested movie and theater details!
    const result = await pool.query(queries.SELECT_ALL_SHOWS);
    return result.rows;
};

const createShow = async (showData) => {
    const { theater_id, movie_id, show_start_time, show_end_time, price } = showData;
    const result = await pool.query(queries.INSERT_SHOW, [theater_id, movie_id, show_start_time, show_end_time, price]);
    return result.rows[0];
};

const updateShow = async (id, showData) => {
    const fields = Object.keys(showData);
    if (fields.length === 0) {
        return null;
    }
    const setClauses = fields.map((field, index) => `${field} = $${index + 1}`);
    const values = fields.map((field) => showData[field]);

    const query = `UPDATE shows SET ${setClauses.join(', ')} WHERE show_id = $${fields.length + 1} RETURNING *`;
    const result = await pool.query(query, [...values, id]);
    return result.rows[0];
};

const deleteShow = async (id) => {
    const result = await pool.query(queries.DELETE_SHOW, [id]);
    return result.rows[0];
};

module.exports = {
    findAllShows,
    createShow,
    updateShow,
    deleteShow,
};
