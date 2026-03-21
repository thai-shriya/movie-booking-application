const theatersService = require('./theaters.service');

const getAllTheaters = async (req, res) => {
    try {
        const theaters = await theatersService.getAllTheaters();
        res.status(200).json(theaters);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch theaters' });
    }
};

const addTheater = async (req, res) => {
    try {
        const theater = await theatersService.addTheater(req.validatedBody);
        res.status(201).json(theater);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add theater' });
    }
};

const updateTheater = async (req, res) => {
    try {
        const { id } = req.params;
        const theater = await theatersService.updateTheater(id, req.validatedBody);
        if (!theater) {
            return res.status(404).json({ error: 'Theater not found' });
        }
        res.status(200).json(theater);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update theater' });
    }
};

const deleteTheater = async (req, res) => {
    try {
        const { id } = req.params;
        const theater = await theatersService.deleteTheater(id);
        if (!theater) {
            return res.status(404).json({ error: 'Theater not found' });
        }
        res.status(200).json({ message: 'Theater deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete theater' });
    }
};

module.exports = {
    getAllTheaters,
    addTheater,
    updateTheater,
    deleteTheater
};
