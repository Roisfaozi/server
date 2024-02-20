const bookingModel = require('../models/bookings');

const controller = {
  async getAllBookings(req, res) {
    try {
      const bookings = await bookingModel.getAllBookings();
      res.status(200).json({ success: true, bookings });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },

  async getBookingById(req, res) {
    try {
      const bookingId = req.params.id;
      const booking = await bookingModel.getBookingById(bookingId);
      if (booking) {
        res.status(200).json({ success: true, booking });
      } else {
        res.status(404).json({ success: false, error: 'Booking not found' });
      }
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },

  async addBooking(req, res) {
    try {
      const bookingData = req.body;
      const result = await bookingModel.addBooking(bookingData);
      res.status(201).json({ success: true, bookingId: result.bookingId });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error: error.message });
    }
  },

  async updateBooking(req, res) {
    try {
      const bookingId = req.params.id;
      const bookingData = req.body;

      const result = await bookingModel.updateBooking(bookingId, bookingData);

      res.status(200).json({ success: true, message: result.message });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },

  async deleteBooking(req, res) {
    try {
      const bookingId = req.params.id;

      const result = await bookingModel.deleteBooking(bookingId);

      res.status(200).json({ success: true, message: result.message });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },
};

module.exports = controller;
