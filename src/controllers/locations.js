const locationsModel = require('../models/locations');

const controller = {
  addLocation: async (req, res) => {
    const { city, address } = req.body;

    try {
      const newLocation = await locationsModel.addLocation(city, address);
      res
        .status(201)
        .json({ message: 'Success add new location', newLocation });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getLocations: async (req, res) => {
    try {
      const locations = await locationsModel.getLocations();
      res.status(200).json({ message: 'Success get locations', locations });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getLocationById: async (req, res) => {
    const locationId = parseInt(req.params.id);

    try {
      const location = await locationsModel.getLocationById(locationId);
      res.status(200).json({ message: 'Success get location id', location });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  updateLocation: async (req, res) => {
    const locationId = parseInt(req.params.id);
    const { city, address } = req.body;

    try {
      const updatedLocation = await locationsModel.updateLocation(
        locationId,
        city,
        address
      );
      res
        .status(200)
        .json({ message: 'Success update location', updatedLocation });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  deleteLocationById: async (req, res) => {
    const locationId = parseInt(req.params.id);

    try {
      const result = await locationsModel.deleteLocationById(locationId);
      res.status(200).json({ message: result });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },
};

module.exports = controller;
