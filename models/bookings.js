const db = require('../config/dbConfig');

const models = {
  // gak muncul responsnya
  addBooking: (bookingData) => {
    return new Promise((resolve, reject) => {
      const {
        seat_number,
        customer_name,
        booking_time,
        movie_id,
        price,
        user_id,
        schedule_id,
      } = bookingData;

      db.query(
        `INSERT INTO booking 
      (seat_number, customer_name, booking_time, movie_id, price, user_id, schedule_id) 
      VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        [
          seat_number,
          customer_name,
          booking_time,
          movie_id,
          price,
          user_id,
          schedule_id,
        ]
      )
        .then((res) => {
          console.log(res);
          resolve({ success: true, bookingId: res.rows[0] });
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getAllBookings() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM booking')
        .then((res) => {
          resolve(res.rows);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getBookingById(bookingId) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM booking WHERE booking_id = $1', [bookingId])
        .then((res) => {
          resolve(res.rows[0]);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  // tidak mengembalikan returbn
  updateBooking(bookingId, bookingData) {
    return new Promise((resolve, reject) => {
      const {
        seat_number,
        customer_name,
        booking_time,
        movie_id,
        price,
        user_id,
        schedule_id,
      } = bookingData;

      db.query(
        `UPDATE booking 
      SET seat_number = $1, 
          customer_name = $2, 
          booking_time = $3, 
          movie_id = $4, 
          price = $5, 
          user_id = $6, 
          schedule_id = $7 
      WHERE booking_id = $8`,
        [
          seat_number,
          customer_name,
          booking_time,
          movie_id,
          price,
          user_id,
          schedule_id,
          bookingId,
        ]
      )
        .then((res) => {
          if (res.rowCount > 0) {
            resolve({ success: true, message: 'Booking updated successfully' });
          } else {
            reject({ success: false, message: 'Booking not found' });
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  deleteBooking(bookingId) {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM booking WHERE booking_id = $1', [bookingId])
        .then((res) => {
          if (res.rowCount > 0) {
            resolve({ success: true, message: 'Booking deleted successfully' });
          } else {
            reject({ success: false, message: 'Booking not found' });
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

module.exports = models;
