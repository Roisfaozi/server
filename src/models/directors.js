const db = require('../config/dbConfig');

const models = {
  addDiretor: async (director_name) => {
    try {
      const result = await db.query(
        'INSERT INTO directors (name) VALUES ($1) RETURNING id;',
        [director_name]
      );
      return result.rows[0].id;
    } catch (error) {
      throw new Error(`Error creating director: ${error.message}`);
    }
  },
  getDiretors: async (limit, offset) => {
    try {
      const result = await db.query(
        'SELECT id, name FROM directors ORDER BY id LIMIT $1 OFFSET $2;',
        [limit, offset]
      );
      return result.rows;
    } catch (error) {
      throw new Error(`Error getting directors: ${error.message}`);
    }
  },
};

module.exports = models;
