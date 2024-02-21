const db = require('../config/dbConfig');

const models = {
  addBooking: async (user_id, schedule_id, seat_id) => {
    try {
      const result = await db.query(
        'INSERT INTO bookings (user_id, schedule_id, seat_id) VALUES ($1, $2, $3) RETURNING *',
        [user_id, schedule_id, seat_id]
      );

      return result.rows[0];
    } catch (error) {
      throw new Error(`Error adding booking: ${error.message}`);
    }
  },

  getBookings: async () => {
    try {
      const result = await db.query('SELECT * FROM bookings');
      return result.rows;
    } catch (error) {
      throw new Error(`Error getting bookings: ${error.message}`);
    }
  },

  getBookingById: async (booking_id) => {
    try {
      const result = await db.query(
        'SELECT * FROM bookings WHERE booking_id = $1',
        [booking_id]
      );

      if (result.rows.length === 0) {
        throw new Error('Booking not found');
      }

      return result.rows[0];
    } catch (error) {
      throw new Error(`Error getting booking: ${error.message}`);
    }
  },

  getBookingDetailsById: async (booking_id) => {
    try {
      const result = await db.query(
        `SELECT
          bookings.booking_id,
          users.username,
          users.email,
          schedules.start_time,
          schedules.end_time,
          premieres.premiere_name,
          premieres.time as premiere_time,
          movie.title as movie_title,
          locations.city,
          locations.address,
          seat.seat_id,
          seat.row,
          seat.col,
          seat.seat_name,
          seat.status
        FROM bookings
        INNER JOIN users ON bookings.user_id = users.user_id
        INNER JOIN schedules ON bookings.schedule_id = schedules.id
        INNER JOIN premieres ON schedules.premiere_id = premieres.id
        INNER JOIN movie ON premieres.movie_id = movie.movie_id
        INNER JOIN locations ON premieres.location_id = locations.id
        INNER JOIN seat ON bookings.seat_id = seat.seat_id
        WHERE bookings.booking_id = $1`,
        [booking_id]
      );

      if (result.rows.length === 0) {
        throw new Error('Booking not found');
      }
      const bookingDetails = {
        booking_id: result.rows[0].booking_id,
        user: {
          username: result.rows[0].username,
          email: result.rows[0].email,
        },
        schedule: {
          start_time: result.rows[0].start_time,
          end_time: result.rows[0].end_time,
          premiere_name: result.rows[0].premiere_name,
          time: result.rows[0].time,
          movie_title: result.rows[0].movie_title,
          city: result.rows[0].city,
          address: result.rows[0].address,
        },
        seat: result.rows.map((row) => ({
          seat_id: row.seat_id,
          row: row.row,
          col: row.col,
          seat_name: row.seat_name,
          status: row.status,
        })),
      };
      return bookingDetails;
    } catch (error) {
      console.log(error);
      throw new Error(`Error getting booking details: ${error.message}`);
    }
  },

  updateBooking: async (booking_id, user_id, schedule_id, seat_id) => {
    try {
      const result = await db.query(
        'UPDATE bookings SET user_id = $2, schedule_id = $3, seat_id = $4 WHERE booking_id = $1 RETURNING *',
        [booking_id, user_id, schedule_id, seat_id]
      );

      if (result.rows.length === 0) {
        throw new Error('Booking not found');
      }

      return result.rows[0];
    } catch (error) {
      throw new Error(`Error updating booking: ${error.message}`);
    }
  },

  deleteBookingById: async (booking_id) => {
    try {
      const result = await db.query(
        'DELETE FROM bookings WHERE booking_id = $1 RETURNING *',
        [booking_id]
      );

      if (result.rows.length === 0) {
        throw new Error('Booking not found');
      }

      return 'Booking deleted successfully';
    } catch (error) {
      throw new Error(`Error deleting booking: ${error.message}`);
    }
  },
};

module.exports = models;
