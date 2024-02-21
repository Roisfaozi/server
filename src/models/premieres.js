const db = require('../config/dbConfig');

const models = {
  addPremiere: async (
    movie_id,
    location_id,
    date,
    time,
    total_seat,
    premiere_name
  ) => {
    try {
      const existingMovie = await db.query(
        'SELECT * FROM movie WHERE movie_id = $1',
        [movie_id]
      );
      const existingLocation = await db.query(
        'SELECT * FROM locations WHERE id = $1',
        [location_id]
      );

      if (
        existingMovie.rows.length === 0 ||
        existingLocation.rows.length === 0
      ) {
        throw new Error('Movie or location not found');
      }

      const result = await db.query(
        'INSERT INTO premieres (movie_id, location_id, date, time, total_seat) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [movie_id, location_id, date, time, total_seat, premiere_name]
      );

      return result.rows[0];
    } catch (error) {
      throw new Error(`Error adding premiere: ${error.message}`);
    }
  },

  getPremieres: async () => {
    try {
      const result = await db.query('SELECT * FROM premieres');
      return result.rows;
    } catch (error) {
      throw new Error(`Error getting premieres: ${error.message}`);
    }
  },

  getPremiereById: async (premiereId) => {
    try {
      const result = await db.query('SELECT * FROM premieres WHERE id = $1', [
        premiereId,
      ]);
      if (result.rows.length === 0) {
        throw new Error('Premiere not found');
      }
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error getting premiere: ${error.message}`);
    }
  },

  updatePremiere: async (
    movie_id,
    location_id,
    date,
    time,
    total_seat,
    premiere_name
  ) => {
    try {
      const existingMovie = await db.query(
        'SELECT * FROM movie WHERE movie_id = $1',
        [movie_id]
      );
      const existingLocation = await db.query(
        'SELECT * FROM locations WHERE id = $1',
        [location_id]
      );

      if (
        existingMovie.rows.length === 0 ||
        existingLocation.rows.length === 0
      ) {
        throw new Error('Movie or location not found');
      }

      const result = await db.query(
        'UPDATE premieres SET movie_id = $2, location_id = $3, date = $4, time = $5, total_seat = $6, premiere_name = $7 WHERE id = $1 RETURNING *',
        [
          premiereId,
          movie_id,
          location_id,
          date,
          time,
          total_seat,
          premiere_name,
        ]
      );

      if (result.rows.length === 0) {
        throw new Error('Premiere not found');
      }

      return result.rows[0];
    } catch (error) {
      throw new Error(`Error updating premiere: ${error.message}`);
    }
  },

  deletePremiereById: async (premiereId) => {
    try {
      await db.query('DELETE FROM premieres WHERE id = $1', [premiereId]);

      return 'Premiere deleted successfully';
    } catch (error) {
      throw new Error(`Error deleting premiere: ${error.message}`);
    }
  },
};

module.exports = models;
