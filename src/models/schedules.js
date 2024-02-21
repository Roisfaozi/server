const db = require('../config/dbConfig');

const models = {
  addSchedule: async (premiere_id, start_time, end_time) => {
    try {
      const existingPremiere = await db.query(
        'SELECT * FROM premieres WHERE id = $1',
        [premiere_id]
      );

      if (existingPremiere.rows.length === 0) {
        throw new Error('Premiere not found');
      }

      const result = await db.query(
        'INSERT INTO schedules (premiere_id, start_time, end_time) VALUES ($1, $2, $3) RETURNING *',
        [premiere_id, start_time, end_time]
      );

      return result.rows[0];
    } catch (error) {
      throw new Error(`Error adding schedule: ${error.message}`);
    }
  },

  getSchedules: async () => {
    try {
      const result = await db.query('SELECT * FROM schedules');
      return result.rows;
    } catch (error) {
      throw new Error(`Error getting schedules: ${error.message}`);
    }
  },

  getScheduleById: async (schedule_id) => {
    try {
      const result = await db.query('SELECT * FROM schedules WHERE id = $1', [
        schedule_id,
      ]);

      if (result.rows.length === 0) {
        throw new Error('Schedule not found');
      }

      return result.rows[0];
    } catch (error) {
      throw new Error(`Error getting schedule: ${error.message}`);
    }
  },

  getScheduleDetails: async () => {
    try {
      const result = await db.query(`
        SELECT 
          s.id as schedule_id, 
          s.start_time, 
          s.end_time, 
          p.premiere_name as premiere_name, 
          p.date, 
          p.time, 
          p.total_seat,
          m.title as movie_title,
          l.city as location_city,
          l.address as location_address
        FROM schedules s
        JOIN premieres p ON s.premiere_id = p.id
        JOIN movie m ON p.movie_id = m.movie_id
        JOIN locations l ON p.location_id = l.id
      `);

      return result.rows;
    } catch (error) {
      throw new Error(`Error getting schedule details: ${error.message}`);
    }
  },

  getScheduleDetailsById: async (scheduleId) => {
    try {
      const result = await db.query(
        `SELECT schedules.id AS schedule_id, 
              schedules.start_time, 
              schedules.end_time, 
              premieres.premiere_name AS premiere_name, 
              premieres.date, 
              premieres.time, 
              premieres.total_seat,
              movie.title AS movie_title, 
              locations.city, 
              locations.address
        FROM schedules
        JOIN premieres ON schedules.premiere_id = premieres.id
        JOIN movie ON premieres.movie_id = movie.movie_id
        JOIN locations ON premieres.location_id = locations.id
        WHERE schedules.id = $1`,
        [scheduleId]
      );

      if (result.rows.length === 0) {
        throw new Error('Schedule not found');
      }

      return result.rows[0];
    } catch (error) {
      throw new Error(`Error getting schedule details: ${error.message}`);
    }
  },

  updateSchedule: async (schedule_id, premiere_id, start_time, end_time) => {
    try {
      const existingPremiere = await db.query(
        'SELECT * FROM premieres WHERE id = $1',
        [premiere_id]
      );

      if (existingPremiere.rows.length === 0) {
        throw new Error('Premiere not found');
      }

      const result = await db.query(
        'UPDATE schedules SET premiere_id = $2, start_time = $3, end_time = $4 WHERE id = $1 RETURNING *',
        [schedule_id, premiere_id, start_time, end_time]
      );

      if (result.rows.length === 0) {
        throw new Error('Schedule not found');
      }

      return result.rows[0];
    } catch (error) {
      throw new Error(`Error updating schedule: ${error.message}`);
    }
  },

  deleteScheduleById: async (schedule_id) => {
    try {
      const result = await db.query(
        'DELETE FROM schedules WHERE id = $1 RETURNING *',
        [schedule_id]
      );

      if (result.rows.length === 0) {
        throw new Error('Schedule not found');
      }

      return 'Schedule deleted successfully';
    } catch (error) {
      throw new Error(`Error deleting schedule: ${error.message}`);
    }
  },
};

module.exports = models;
