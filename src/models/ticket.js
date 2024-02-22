const db = require('../config/dbConfig');

const models = {
  addTicket: async (booking_id, seat_number, price) => {
    try {
      const result = await db.query(
        'INSERT INTO tickets (booking_id, seat_number, price, created_at) VALUES ($1, $2, $3, NOW()) RETURNING *',
        [booking_id, seat_number, price]
      );

      return result.rows[0];
    } catch (error) {
      throw new Error(`Error adding ticket: ${error.message}`);
    }
  },

  getTickets: async () => {
    try {
      const result = await db.query('SELECT * FROM tickets');
      return result.rows;
    } catch (error) {
      throw new Error(`Error getting tickets: ${error.message}`);
    }
  },

  getTicketById: async (ticket_id) => {
    try {
      const result = await db.query('SELECT * FROM tickets WHERE id = $1', [
        ticket_id,
      ]);

      if (result.rows.length === 0) {
        throw new Error('Ticket not found');
      }

      return result.rows[0];
    } catch (error) {
      throw new Error(`Error getting ticket: ${error.message}`);
    }
  },

  updateTicket: async (ticket_id, booking_id, seat_number, price) => {
    try {
      const result = await db.query(
        'UPDATE tickets SET booking_id = $2, seat_number = $3, price = $4 WHERE id = $1 RETURNING *',
        [ticket_id, booking_id, seat_number, price]
      );

      if (result.rows.length === 0) {
        throw new Error('Ticket not found');
      }

      return result.rows[0];
    } catch (error) {
      throw new Error(`Error updating ticket: ${error.message}`);
    }
  },

  deleteTicketById: async (ticket_id) => {
    try {
      const result = await db.query(
        'DELETE FROM tickets WHERE id = $1 RETURNING *',
        [ticket_id]
      );

      if (result.rows.length === 0) {
        throw new Error('Ticket not found');
      }

      return 'Ticket deleted successfully';
    } catch (error) {
      throw new Error(`Error deleting ticket: ${error.message}`);
    }
  },
};

module.exports = models;
