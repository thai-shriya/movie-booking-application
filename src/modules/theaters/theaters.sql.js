const SELECT_ALL_THEATERS = `SELECT * FROM theaters`;

const INSERT_THEATER = `INSERT INTO theaters (name, location, capacity) VALUES ($1, $2, $3) RETURNING *`;

const DELETE_THEATER = `DELETE FROM theaters WHERE theater_id = $1 RETURNING *`;

module.exports = {
    SELECT_ALL_THEATERS,
    INSERT_THEATER,
    DELETE_THEATER,
};
