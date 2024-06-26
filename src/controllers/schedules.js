const scheduleModel = require('../models/schedules');

const controller = {
  addSchedule: async (req, res) => {
    const { premiere_id, start_time, end_time } = req.body;

    try {
      const newSchedule = await scheduleModel.addSchedule(
        premiere_id,
        start_time,
        end_time
      );

      res.status(201).json({
        success: 'Success add schedule',
        newSchedule,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getSchedules: async (req, res) => {
    try {
      const schedules = await scheduleModel.getSchedules();
      res.status(200).json({
        success: 'Success get all schedule',
        schedules,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getScheduleDetailsById: async (req, res) => {
    const schedule_id = parseInt(req.params.id);

    try {
      const schedule = await scheduleModel.getScheduleDetailsById(schedule_id);
      res.status(200).json({
        success: 'Success get schedule by ID',
        schedule,
      });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  getScheduleDetailsByMovieId: async (req, res) => {
    const movie_id = parseInt(req.params.movieid);

    try {
      const schedule = await scheduleModel.getScheduleDetailsMovieId(movie_id);
      res.status(200).json(schedule);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  getScheduleById: async (req, res) => {
    const schedule_id = parseInt(req.params.id);

    try {
      const schedule = await scheduleModel.getScheduleById(schedule_id);
      res.status(200).json(schedule);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  getScheduleDetails: async (req, res) => {
    try {
      const scheduleDetails = await scheduleModel.getScheduleDetails();
      res.status(200).json({
        success: 'Success get detailed schedule',
        scheduleDetails,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateSchedule: async (req, res) => {
    const schedule_id = parseInt(req.params.id);
    const { premiere_id, start_time, end_time } = req.body;

    try {
      const updatedSchedule = await scheduleModel.updateSchedule(
        schedule_id,
        premiere_id,
        start_time,
        end_time
      );
      res.status(200).json({
        success: 'Success update schedule',
        updatedSchedule,
      });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  deleteScheduleById: async (req, res) => {
    const schedule_id = parseInt(req.params.id);

    try {
      const result = await scheduleModel.deleteScheduleById(schedule_id);
      res.status(200).json({ message: result });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },
};

module.exports = controller;
