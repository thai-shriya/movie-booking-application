const SELECT_ALL_SHOWS = `SELECT * FROM shows`;

const INSERT_SHOW = `INSERT INTO shows (theater_id, movie_id, show_start_time, show_end_time, price) VALUES ($1, $2, $3, $4, $5) RETURNING *`;

const DELETE_SHOW = `DELETE FROM shows WHERE show_id = $1 RETURNING *`;

module.exports = {
    SELECT_ALL_SHOWS,
    INSERT_SHOW,
    DELETE_SHOW,
};
