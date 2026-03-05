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
        res.status(200).json(movie);
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

module.exports = {
    getAllUsers,
    addUser,
    updateUser,
    deleteUser
};
