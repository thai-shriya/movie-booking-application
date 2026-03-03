const moviesService = require('./movies.service');

const getAllMovies = async (req, res) => {
    try {
        const movies = await moviesService.getAllMovies();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch movies' });
    }
};

const addMovie = async (req, res) => {
    try {
        const movie = await moviesService.addMovie(req.validatedBody);
        res.status(201).json(movie);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add movie' });
    }
};

const updateMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await moviesService.updateMovie(id, req.validatedBody);
        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update movie' });
    }
};

const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await moviesService.deleteMovie(id);
        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        res.status(200).json({ message: 'Movie deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete movie' });
    }
};

module.exports = {
    getAllMovies,
    addMovie,
    updateMovie,
    deleteMovie,
};
