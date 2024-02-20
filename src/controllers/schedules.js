const scheduleModel = require('../models/schedules');

const controller = {
  async getAllSchedules(req, res) {
    try {
      const schedules = await scheduleModel.getAllSchedules();
      res.status(200).json(schedules);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async getScheduleById(req, res) {
    const { scheduleId } = req.params;
    try {
      const schedule = await scheduleModel.getScheduleById(scheduleId);
      if (schedule) {
        res.status(200).json(schedule);
      } else {
        res.status(404).json({ error: 'Schedule not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async addSchedule(req, res) {
    const scheduleData = req.body;
    try {
      const newSchedule = await scheduleModel.addSchedule(scheduleData);
      res.status(201).json(newSchedule);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async updateSchedule(req, res) {
    const { scheduleId } = req.params;
    const scheduleData = req.body;
    try {
      const updatedSchedule = await scheduleModel.updateSchedule(
        scheduleId,
        scheduleData
      );
      res.status(200).json(updatedSchedule);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async deleteSchedule(req, res) {
    const { scheduleId } = req.params;
    try {
      await scheduleModel.deleteSchedule(scheduleId);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = controller;
