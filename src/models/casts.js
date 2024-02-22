const db = require('../config/dbConfig');

const models = {
  addCast: async (cast_name) => {
    try {
      const checkIfCastExists = async (cast_name) => {
        const queryResult = await db.query(
          'SELECT id FROM casts WHERE name = $1;',
          [cast_name]
        );
        return queryResult.rows.length > 0;
      };

      const castExists = await checkIfCastExists(cast_name);

      if (!castExists) {
        const result = await db.query(
          'INSERT INTO casts (name) VALUES ($1) RETURNING id;',
          [cast_name]
        );
        return result.rows[0].id;
      } else {
        return new Error('Cast name already exists');
      }
    } catch (error) {
      throw new Error(`Error creating director: ${error.message}`);
    }
  },
  getCasts: async (limit, offset) => {
    try {
      const result = await db.query(
        'SELECT id, name FROM casts ORDER BY id LIMIT $1 OFFSET $2;',
        [limit, offset]
      );
      return result.rows;
    } catch (error) {
      throw new Error(`Error getting directors: ${error.message}`);
    }
  },
};

module.exports = models;
