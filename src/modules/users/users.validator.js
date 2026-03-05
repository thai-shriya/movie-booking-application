const { z } = require('zod');

const VALID_USER_TYPES = ['customer', 'client', 'admin'];
const VALID_USER_STATUSES = ['pending', 'approved'];


const createUserSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string()
        .min(1, 'Email is required')
        .email('Invalid email format')
        .transform((val) => val.toLowerCase().trim()),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    user_type: z.enum(VALID_USER_TYPES, {
        errorMap: () => ({ message: `User type must be one of: ${VALID_USER_TYPES.join(', ')}` }),
    }).default('customer'),
    user_status: z.enum(VALID_USER_STATUSES, {
        errorMap: () => ({ message: `User status must be one of: ${VALID_USER_STATUSES.join(', ')}` }),
    }).default('approved'),
}).strict();


const updateUserSchema = z.object({
    name: z.string().min(1, 'Name cannot be empty').optional(),
    email: z.string()
        .email('Invalid email format')
        .transform((val) => val.toLowerCase().trim())
        .optional(),
    password: z.string().min(6, 'Password must be at least 6 characters').optional(),
    user_type: z.enum(VALID_USER_TYPES, {
        errorMap: () => ({ message: `User type must be one of: ${VALID_USER_TYPES.join(', ')}` }),
    }).optional(),
    user_status: z.enum(VALID_USER_STATUSES, {
        errorMap: () => ({ message: `User status must be one of: ${VALID_USER_STATUSES.join(', ')}` }),
    }).optional(),
}).strict();

module.exports = {
    createUserSchema,
    updateUserSchema,
};
