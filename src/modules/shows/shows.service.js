const showsRepository = require('./shows.repository');

const getAllShows = async () => {
    return await showsRepository.findAllShows();
};

const addShow = async (showData) => {
    return await showsRepository.createShow(showData);
};

const updateShow = async (id, showData) => {
    return await showsRepository.updateShow(id, showData);
};

const deleteShow = async (id) => {
    return await showsRepository.deleteShow(id);
};

module.exports = {
    getAllShows,
    addShow,
    updateShow,
    deleteShow
};
