const genreModel = require('../models/genres');

const controller = {
  createGenre: async (req, res) => {
    try {
      const { genre_name } = req.body;
      const genreId = await genreModel.addGenre(genre_name);
      res.json({ message: 'Genre created successfully', genreId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  getGenres: async (req, res) => {
    try {
      const genres = await genreModel.getGenres();
      res.json({ message: 'Genre get successfully', genres });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = controller;
