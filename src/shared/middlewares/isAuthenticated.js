const isAuthenticated = (req, res, next) => {
    const user_role = req.user?.user_type;
    if (user_role === 'customer' || user_role === 'admin') {
        return next();
    }
    return res.status(403).json({
        message: "Action Forbidden - user not authorized for this type of action"
    });
};

module.exports = {
    isAuthenticated
}