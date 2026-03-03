const pool = require('../../config/db');
const queries = require('./movies.sql');

const findAllMovies = async () => {
    const result = await pool.query(queries.SELECT_ALL_MOVIES);
    return result.rows;
};

const createMovie = async (movieData) => {
    const { movie_name, release_date, actors, movie_language, release_status, director } = movieData;
    const result = await pool.query(queries.INSERT_MOVIE, [movie_name, release_date, actors, movie_language, release_status, director]);
    return result.rows[0];
};

const updateMovie = async (id, movieData) => {
    const fields = Object.keys(movieData);
    if (fields.length === 0) {
        return null;
    }

    const setClauses = fields.map((field, index) => `${field} = $${index + 1}`);
    const values = fields.map((field) => movieData[field]);

    const query = `UPDATE movies SET ${setClauses.join(', ')} WHERE movie_id = $${fields.length + 1} RETURNING *`;
    const result = await pool.query(query, [...values, id]);
    return result.rows[0];
};

const deleteMovie = async (id) => {
    const result = await pool.query(queries.DELETE_MOVIE, [id]);
    return result.rows[0];
};

module.exports = {
    findAllMovies,
    createMovie,
    updateMovie,
    deleteMovie,
};
