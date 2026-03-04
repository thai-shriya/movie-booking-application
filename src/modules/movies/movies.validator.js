const { z } = require('zod');

const VALID_STATUSES = ['RELEASED', 'NOT YET RELEASED', 'BLOCKED'];

// Schema for creating a movie (POST)
const createMovieSchema = z.object({
    movie_name: z.string().min(1, 'Movie name is required'),
    release_date: z.string().min(1, 'Release date is required'),
    actors: z.array(z.string()).min(1, 'At least one actor is required'),
    movie_language: z.string().min(1, 'Language is required'),
    release_status: z.enum(VALID_STATUSES, {
        errorMap: () => ({ message: `Status must be one of: ${VALID_STATUSES.join(', ')}` }),
    }),
    director: z.string().min(1, 'Director is required'),
    genre: z.string().min(1, 'genre is required')
}).strict();

// Schema for updating a movie (PATCH) - all fields optional
const updateMovieSchema = z.object({
    movie_name: z.string().min(1, 'Movie name cannot be empty').optional(),
    release_date: z.string().optional(),
    actors: z.array(z.string()).min(1, 'At least one actor is required').optional(),
    movie_language: z.string().optional(),
    release_status: z.enum(VALID_STATUSES, {
        errorMap: () => ({ message: `Status must be one of: ${VALID_STATUSES.join(', ')}` }),
    }).optional(),
    director: z.string().optional(),
    genre: z.string().optional()
}).strict();

module.exports = {
    createMovieSchema,
    updateMovieSchema,
};
