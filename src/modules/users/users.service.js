const usersRepository = require('./users.repository');


const getAllUsers = async () => {
    return await usersRepository.findAllUsers();
};

const addUser = async (userData) => {
    return await usersRepository.createUser(userData);
};

const updateUser = async (id, userData) => {
    return await usersRepository.updateUser(id, userData);
};

const deleteUser = async (id) => {
    return await usersRepository.deleteUser(id);
};

module.exports = {
    getAllUsers,
    addUser,
    updateUser,
    deleteUser
};
