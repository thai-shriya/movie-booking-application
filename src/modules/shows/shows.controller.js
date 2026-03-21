const showsService = require('./shows.service');

const getAllShows = async (req, res) => {
    try {
        const shows = await showsService.getAllShows();
        res.status(200).json(shows);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch shows' });
    }
};

const addShow = async (req, res) => {
    try {
        const show = await showsService.addShow(req.validatedBody);
        res.status(201).json(show);
    } catch (error) {
        // Handle specific postgres foreign key errors nicely if needed
        res.status(500).json({ error: 'Failed to add show. Verify theater_id and movie_id exist.' });
    }
};

const updateShow = async (req, res) => {
    try {
        const { id } = req.params;
        const show = await showsService.updateShow(id, req.validatedBody);
        if (!show) {
            return res.status(404).json({ error: 'Show not found' });
        }
        res.status(200).json(show);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update show' });
    }
};

const deleteShow = async (req, res) => {
    try {
        const { id } = req.params;
        const show = await showsService.deleteShow(id);
        if (!show) {
            return res.status(404).json({ error: 'Show not found' });
        }
        res.status(200).json({ message: 'Show deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete show' });
    }
};

module.exports = {
    getAllShows,
    addShow,
    updateShow,
    deleteShow
};
