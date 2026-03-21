const { z } = require('zod');

const createTheaterSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    location: z.string().min(1, 'Location is required'),
    capacity: z.number().int().positive('Capacity must be a positive integer').optional()
}).strict();

const updateTheaterSchema = z.object({
    name: z.string().min(1, 'Name cannot be empty').optional(),
    location: z.string().min(1, 'Location cannot be empty').optional(),
    capacity: z.number().int().positive('Capacity must be a positive integer').optional()
}).strict();

module.exports = {
    createTheaterSchema,
    updateTheaterSchema,
};
