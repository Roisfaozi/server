const movieModel = require('../models/movies');

const controller = {
  async getAllMovies(req, res) {
    try {
      const title = req.query.title || '';
      const page = parseInt(req.query.page) || 1;
      const limit = 10;

      const offset = (page - 1) * limit;

      const movies = await movieModel.getAllMovies(title, limit, offset);
      res.json(movies);
    } catch (error) {
      res
        .status(500)
        .json({ error: `Internal Server Error: ${error.message}` });
    }
  },

  async getMovieById(req, res) {
    const { movieId } = req.params;
    try {
      const movie = await movieModel.getMovieById(movieId);
      res.json(movie);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  addMovie: async (req, res) => {
    try {
      const file = req.file;
      if (!file) {
        return res.status(400).send('No file uploaded.');
      }

      req.body.poster_url = `http://localhost:8001/image/${file.filename}`;
      const { movie_id } = await movieModel.addMovie(req.body);
      res.status(201).json({ success: 'Success add new movie', movie_id });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async updateMovie(req, res) {
    const { movieId } = req.params;

    try {
      const file = req.file;
      if (!file) {
        return res.status(400).send('No file uploaded.');
      }

      req.body.poster_url = `http://localhost:8000/image/${file.filename}`;

      const updatedMovie = await movieModel.updateMovie(movieId, req.body);
      res.json(updatedMovie);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  async deleteMovie(req, res) {
    const { movieId } = req.params;
    try {
      const deletedMovie = await movieModel.deleteMovie(movieId);
      res.json({ success: true, message: 'movies already deleted' });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  async searchMovieByTitle(req, res) {
    console.log(req);
    try {
      const { title } = req.query;
      if (!title) {
        return res
          .status(400)
          .json({ success: false, error: 'Title parameter is required' });
      }

      const movies = await movieModel.searchMovieByTitle(title);

      res.status(200).json({ success: true, data: movies });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error: error.message });
    }
  },

  async sortMovies(req, res) {
    try {
      const { sortBy } = req.query;
      console.log(sortBy);
      if (!sortBy) {
        return res
          .status(400)
          .json({ success: false, error: 'SortBy parameter is required' });
      }

      const movies = await movieModel.sortMovies(sortBy);

      res.status(200).json({ success: true, data: movies });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },
};

module.exports = controller;
