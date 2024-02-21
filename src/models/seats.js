const db = require('../config/dbConfig');

const models = {
  addSeat: async (premiere_id, row, col, seat_name, status) => {
    try {
      const existingPremiere = await db.query(
        'SELECT * FROM premieres WHERE id = $1',
        [premiere_id]
      );

      if (existingPremiere.rows.length === 0) {
        throw new Error('Premiere not found');
      }

      const result = await db.query(
        'INSERT INTO seat (premiere_id, row, col, seat_name, status) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [premiere_id, row, col, seat_name, status]
      );

      return result.rows[0];
    } catch (error) {
      throw new Error(`Error adding seat: ${error.message}`);
    }
  },

  getSeatsByPremiereId: async (premiere_id, limit, offset) => {
    try {
      const result = await db.query(
        'SELECT * FROM seat WHERE premiere_id = $1 LIMIT $2 OFFSET $3;',
        [premiere_id, limit, offset]
      );

      const seats = result.rows;

      const totalCountQuery = `
        SELECT COUNT(*) FROM seat
        WHERE premiere_id = $1;
      `;

      const totalCountResult = await db.query(totalCountQuery, [premiere_id]);
      const totalCount = parseInt(totalCountResult.rows[0].count, 10);

      return { seats, totalCount };
    } catch (error) {
      console.log(error);
      throw new Error(`Error getting seats: ${error.message}`);
    }
  },

  updateSeatStatus: async (seat_id, status) => {
    try {
      const result = await db.query(
        'UPDATE seat SET status = $2 WHERE seat_id = $1 RETURNING *',
        [seat_id, status]
      );

      if (result.rows.length === 0) {
        throw new Error('Seat not found');
      }

      return result.rows[0];
    } catch (error) {
      throw new Error(`Error updating seat status: ${error.message}`);
    }
  },

  deleteSeatById: async (seat_id) => {
    try {
      const result = await db.query(
        'DELETE FROM seat WHERE seat_id = $1 RETURNING *',
        [seat_id]
      );

      if (result.rows.length === 0) {
        throw new Error('Seat not found');
      }

      return 'Seat deleted successfully';
    } catch (error) {
      throw new Error(`Error deleting seat: ${error.message}`);
    }
  },
};

module.exports = models;
