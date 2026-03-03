/**
 * Generic Zod validation middleware.
 * Takes a schema and validates req.body against it.
 * If valid, attaches clean data to req.validatedBody and calls next().
 * If invalid, returns 400 with structured error details.
 */
const validate = (schema) => {
    return (req, res, next) => {
        const parsed = schema.safeParse(req.body);
        if (!parsed.success) {
            const errors = parsed.error.errors.map((err) => ({
                field: err.path.join('.'),
                message: err.message,
            }));
            return res.status(400).json({
                status: 400,
                error: 'Validation Error',
                details: errors,
            });
        }
        req.validatedBody = parsed.data;
        next();
    };
};

module.exports = validate;
