const seatsModel = require('../models/seats');

const seatsController = {
  addSeat: async (req, res) => {
    const { premiere_id, row, col, seat_name, status } = req.body;

    try {
      const newSeat = await seatsModel.addSeat(
        premiere_id,
        row,
        col,
        seat_name,
        status
      );
      res.status(201).json(newSeat);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getSeatsByPremiereId: async (req, res) => {
    const premiere_id = parseInt(req.params.premiere_id);
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const offset = (page - 1) * limit;

    try {
      const { seats, totalCount } = await seatsModel.getSeatsByPremiereId(
        premiere_id,
        limit,
        offset
      );

      const totalPages = Math.ceil(totalCount / limit);
      const hasNextPage = page < totalPages;
      const hasPrevPage = page > 1;

      const meta = {
        totalCount,
        totalPages,
        currentPage: parseInt(page),
        hasNextPage,
        hasPrevPage,
      };

      const result = {
        data: seats,
        meta,
      };

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateSeatStatus: async (req, res) => {
    const seat_id = parseInt(req.params.id);
    const { status } = req.body;

    try {
      const updatedSeat = await seatsModel.updateSeatStatus(seat_id, status);
      res.status(200).json(updatedSeat);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  deleteSeatById: async (req, res) => {
    const seat_id = parseInt(req.params.id);

    try {
      const result = await seatsModel.deleteSeatById(seat_id);
      res.status(200).json({ message: result });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },
};

module.exports = seatsController;
