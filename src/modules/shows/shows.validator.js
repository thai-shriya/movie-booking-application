const { z } = require('zod');

const createShowSchema = z.object({
    theater_id: z.number().int('Theater ID must be an integer'),
    movie_id: z.number().int('Movie ID must be an integer'),
    show_start_time: z.string().datetime({ message: "Invalid datetime format for start time. E.g. '2024-12-01T14:30:00Z'" }),
    show_end_time: z.string().datetime({ message: "Invalid datetime format for end time. E.g. '2024-12-01T17:00:00Z'" }),
    price: z.number().positive('Price must be greater than 0')
}).strict();

const updateShowSchema = z.object({
    theater_id: z.number().int('Theater ID must be an integer').optional(),
    movie_id: z.number().int('Movie ID must be an integer').optional(),
    show_start_time: z.string().datetime().optional(),
    show_end_time: z.string().datetime().optional(),
    price: z.number().positive('Price must be greater than 0').optional()
}).strict();

module.exports = {
    createShowSchema,
    updateShowSchema,
};
