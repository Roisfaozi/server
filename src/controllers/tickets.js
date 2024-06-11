const ticketsModel = require('../models/ticket');
const isAdmin = (req) => req.user && req.user.role === 'admin';

const controller = {
  addTicket: async (req, res) => {
    const { booking_id, seat_number, price } = req.body;

    try {
      if (isAdmin(req) === false) {
        return res
          .status(403)
          .json({ error: 'Forbidden. User does not have permission.' });
      }

      const newTicket = await ticketsModel.addTicket(
        booking_id,
        seat_number,
        price
      );
      res.status(201).json({ message: 'Success add new ticket', newTicket });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getTickets: async (req, res) => {
    try {
      const tickets = await ticketsModel.getTickets();
      res.status(200).json({ message: 'Success get tickets', tickets });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getTicketById: async (req, res) => {
    const ticket_id = parseInt(req.params.id);

    try {
      const ticket = await ticketsModel.getTicketById(ticket_id);
      res.status(200).json({ message: 'Success get ticket detail', ticket });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  updateTicket: async (req, res) => {
    const ticket_id = parseInt(req.params.id);
    const { booking_id, seat_number, price } = req.body;

    try {
      if (!isAdmin(req)) {
        return res
          .status(403)
          .json({ error: 'Forbidden. User does not have permission.' });
      }

      const updatedTicket = await ticketsModel.updateTicket(
        ticket_id,
        booking_id,
        seat_number,
        price
      );
      res.status(200).json({ message: 'Success update ticket', updatedTicket });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  deleteTicketById: async (req, res) => {
    const ticket_id = parseInt(req.params.id);

    try {
      if (!isAdmin(req)) {
        return res
          .status(403)
          .json({ error: 'Forbidden. User does not have permission.' });
      }

      const result = await ticketsModel.deleteTicketById(ticket_id);
      res.status(200).json({ message: result });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },
};

module.exports = controller;
