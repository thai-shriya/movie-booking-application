const moviesRepository = require('./movies.repository');

const getAllMovies = async () => {
    return await moviesRepository.findAllMovies();
};

const addMovie = async (movieData) => {
    return await moviesRepository.createMovie(movieData);
};

const updateMovie = async (id, movieData) => {
    return await moviesRepository.updateMovie(id, movieData);
};

const deleteMovie = async (id) => {
    return await moviesRepository.deleteMovie(id);
};

module.exports = {
    getAllMovies,
    addMovie,
    updateMovie,
    deleteMovie,
};
