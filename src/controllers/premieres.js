const premieresModel = require('../models/premieres');

const PremiereController = {
  addPremiere: async (req, res) => {
    const { movie_id, location_id, date, time, total_seat, premiere_name } =
      req.body;

    try {
      const newPremiere = await premieresModel.addPremiere(
        movie_id,
        location_id,
        date,
        time,
        total_seat,
        premiere_name
      );
      res
        .status(201)
        .json({ message: 'Premiere added successfully', newPremiere });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getPremieres: async (req, res) => {
    try {
      const premieres = await premieresModel.getPremieres();
      res.status(200).json({ message: 'Success get premieres', premieres });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getPremiereById: async (req, res) => {
    const premiereId = parseInt(req.params.id);

    try {
      const premiere = await premieresModel.getPremiereById(premiereId);
      res.status(200).json({ message: 'Success get premiere id', premiere });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  updatePremiere: async (req, res) => {
    const premiereId = parseInt(req.params.id);
    const { movie_id, location_id, date, time, total_seat, premiere_name } =
      req.body;

    try {
      const updatedPremiere = await premieresModel.updatePremiere(
        premiereId,
        movie_id,
        location_id,
        date,
        time,
        total_seat,
        premiere_name
      );
      res
        .status(200)
        .json({ message: 'Premiere updated successfully', updatedPremiere });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  deletePremiereById: async (req, res) => {
    const premiereId = parseInt(req.params.id);

    try {
      const result = await premieresModel.deletePremiereById(premiereId);
      res.status(200).json({ message: result });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },
};

module.exports = PremiereController;
