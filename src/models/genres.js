const db = require('../config/dbConfig');

const models = {
  addGenre: async (genre_name) => {
    try {
      const result = await db.query(
        'INSERT INTO genres (genre_name, created_at, updated_at) VALUES ($1, now(), now()) RETURNING genre_id;',
        [genre_name]
      );
      return result.rows[0].genre_id;
    } catch (error) {
      throw new Error(`Error creating genre: ${error.message}`);
    }
  },
  getGenres: async () => {
    try {
      const result = await db.query(
        'SELECT genre_id, genre_name FROM genres ORDER BY genre_id;'
      );
      return result.rows;
    } catch (error) {
      throw new Error(`Error getting genres: ${error.message}`);
    }
  },
};

module.exports = models;
