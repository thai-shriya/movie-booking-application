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

const validateUserCreds = async (email, password) => {
    return await usersRepository.validateUserCreds(email, password);
};

module.exports = {
    validateUserCreds,
    getAllUsers,
    addUser,
    updateUser,
    deleteUser
};
