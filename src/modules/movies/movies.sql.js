const SELECT_ALL_MOVIES = `SELECT * FROM movies`;

const INSERT_MOVIE = `INSERT INTO movies (movie_name, release_date, actors, movie_language, release_status, director, genre) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;

const DELETE_MOVIE = `DELETE FROM movies WHERE movie_id = $1 RETURNING *`;

module.exports = {
    SELECT_ALL_MOVIES,
    INSERT_MOVIE,
    DELETE_MOVIE,
};
