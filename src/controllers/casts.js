const castModel = require('../models/casts');

const controller = {
  createCast: async (req, res) => {
    try {
      const { cast_name } = req.body;
      const castId = await castModel.addCast(cast_name);
      res.json({ castId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  getCasts: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = 10;

      const offset = (page - 1) * limit;

      const casts = await castModel.getCasts(limit, offset);
      console.log(casts);
      res.json({ casts });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = controller;
