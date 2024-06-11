const bookingsModel = require('../models/bookings');
const isAdmin = (req) => req.user && req.user.role === 'admin';

const controller = {
  addBooking: async (req, res) => {
    const { user_id, schedule_id, seat_id } = req.body;

    try {
      if (isAdmin(req)) {
        return res
          .status(403)
          .json({ error: 'Forbidden. User does not have permission.' });
      }

      const newBooking = await bookingsModel.addBooking(
        user_id,
        schedule_id,
        seat_id
      );
      res.status(201).json({ message: 'Success add new booking', newBooking });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getBookings: async (req, res) => {
    try {
      const bookings = await bookingsModel.getBookings();
      res.status(200).json({ message: 'Success get bookings', bookings });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getBookingDetailsById: async (req, res) => {
    const booking_id = parseInt(req.params.id);

    try {
      if (isAdmin(req)) {
        return res
          .status(403)
          .json({ error: 'Forbidden. User does not have permission.' });
      }

      const bookingDetails =
        await bookingsModel.getBookingDetailsById(booking_id);
      res.status(200).json({ message: 'Success get bookings', bookingDetails });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  getBookingById: async (req, res) => {
    const booking_id = parseInt(req.params.id);

    try {
      const booking = await bookingsModel.getBookingById(booking_id);
      res.status(200).json({ message: 'Success get booking id', booking });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  updateBooking: async (req, res) => {
    const booking_id = parseInt(req.params.id);
    const { user_id, schedule_id, seat_id } = req.body;

    try {
      const updatedBooking = await bookingsModel.updateBooking(
        booking_id,
        user_id,
        schedule_id,
        seat_id
      );
      res
        .status(200)
        .json({ message: 'Success update booking', updatedBooking });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  deleteBookingById: async (req, res) => {
    const booking_id = parseInt(req.params.id);

    try {
      if (isAdmin(req)) {
        return res
          .status(403)
          .json({ error: 'Forbidden. User does not have permission.' });
      }

      const result = await bookingsModel.deleteBookingById(booking_id);
      res.status(200).json({ message: result });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },
};

module.exports = controller;
