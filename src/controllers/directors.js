const directorModel = require('../models/directors');

const controller = {
  createDirector: async (req, res) => {
    try {
      const { director_name } = req.body;
      const directorId = await directorModel.addDiretor(director_name);
      res.json({ message: 'Director created successfully', directorId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  getDirectors: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = 10;

      const offset = (page - 1) * limit;

      const directors = await directorModel.getDiretors(limit, offset);
      res.json({ message: 'Director get successfully', directors });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = controller;
