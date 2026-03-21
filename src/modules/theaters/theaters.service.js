const theatersRepository = require('./theaters.repository');

const getAllTheaters = async () => {
    return await theatersRepository.findAllTheaters();
};

const addTheater = async (theaterData) => {
    return await theatersRepository.createTheater(theaterData);
};

const updateTheater = async (id, theaterData) => {
    return await theatersRepository.updateTheater(id, theaterData);
};

const deleteTheater = async (id) => {
    return await theatersRepository.deleteTheater(id);
};

module.exports = {
    getAllTheaters,
    addTheater,
    updateTheater,
    deleteTheater
};
