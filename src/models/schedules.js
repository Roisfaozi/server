const db = require('../config/dbConfig');

const models = {
  addSchedule(scheduleData) {
    return new Promise((resolve, reject) => {
      const {
        movie_id,
        start_time,
        end_time,
        location,
        start_date,
        end_date,
        ticket_slot,
        theater_number,
      } = scheduleData;

      db.query(
        'INSERT INTO schedule (movie_id, start_time, end_time, location, start_date, end_date, ticket_slot, theater_number) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
        [
          movie_id,
          start_time,
          end_time,
          location,
          start_date,
          end_date,
          ticket_slot,
          theater_number,
        ]
      )
        .then((res) => {
          resolve(res.rows[0]);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getAllSchedules() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM schedule')
        .then((res) => {
          resolve(res.rows);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getScheduleById(scheduleId) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM schedule WHERE schedule_id = $1', [scheduleId])
        .then((res) => {
          resolve(res.rows[0]);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  // tidak mengembalikan returbn
  updateSchedule(scheduleId, scheduleData) {
    return new Promise((resolve, reject) => {
      const {
        movie_id,
        start_time,
        end_time,
        start_date,
        end_date,
        ticket_slot,
        theater_number,
        premiere,
        location,
      } = scheduleData;
      db.query(
        `UPDATE schedule SET 
      movie_id = $1,
      start_time = $2,
      end_time = $3,
      start_date = $4,
      end_date = $5,
      ticket_slot = $6,
      theater_number = $7,
      premiere = $8,
      location = $9
      WHERE schedule_id = $10`,
        [
          movie_id,
          start_time,
          end_time,
          start_date,
          end_date,
          ticket_slot,
          theater_number,
          premiere,
          location,
          scheduleId,
        ]
      )
        .then((res) => {
          console.log(res);
          resolve(res.rows[0]);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  deleteSchedule(scheduleId) {
    return new Promise((resolve, reject) => {
      // Implement the delete logic here
      db.query('DELETE FROM schedule WHERE schedule_id = $1', [scheduleId])
        .then((res) => {
          if (res.rowCount > 0) {
            resolve({ success: true });
          } else {
            reject({ success: false, message: 'Schedule not found' });
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

module.exports = models;
