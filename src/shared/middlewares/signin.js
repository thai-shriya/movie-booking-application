const validateSigninRequest = (req, res, next) => {
    if (!req.body.email) {
        return res.status(400).json({
            status: 400,
            error: 'Signin validation error'
        });
    }

    if (!req.body.password) {
        return res.status(400).json({
            status: 400,
            error: 'Password not provided - Signin validation error'
        });
    }
    next();
};

module.exports = {
    validateSigninRequest
};