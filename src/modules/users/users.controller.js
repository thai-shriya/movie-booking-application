const usersService = require('./users.service');

const getAllUsers = async (req, res) => {
    try {
        const users = await usersService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};

const addUser = async (req, res) => {
    try {
        console.log("in users controller", req.validatedBody);
        const user = await usersService.addUser(req.validatedBody);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add user' });
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await usersService.updateUser(id, req.validatedBody);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update user' });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await usersService.deleteUser(id);
        if (!user) {
            return res.status(404).json({ error: 'user not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete user' });
    }
};

const signinUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userOrError = await usersService.validateUserCreds(email, password);

        // If the service returned a specific error string
        if (typeof userOrError === 'string') {
            return res.status(401).json({ error: userOrError });
        }

        // General fallback check
        if (!userOrError) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Authentication successful', user: userOrError });
    } catch (error) {
        res.status(500).json({ error: 'Failed to authenticate user' });
    }
};

module.exports = {
    getAllUsers,
    addUser,
    updateUser,
    deleteUser,
    signinUser
};
