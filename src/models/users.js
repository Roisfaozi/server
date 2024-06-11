const db = require('../config/dbConfig');

const models = {
  addUser(username, password, email, role) {
    return new Promise((resolve, reject) => {
      db.query(
        'INSERT INTO users( username, password, email, role) VALUES($1, $2, $3, $4) RETURNING *',
        [username, password, email, role]
      )
        .then((res) => {
          resolve(res.rows[0]);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getAllUsers() {
    return new Promise((resolve, reject) => {
      db.query(
        'SELECT user_id, username, email, role, created_at, updated_at FROM users ORDER BY created_at DESC'
      )
        .then((res) => {
          resolve(res.rows);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getUserByUsename(username) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM users WHERE username  = $1', [username])
        .then((res) => {
          resolve(res.rows[0]);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getUserById(userId) {
    return new Promise((resolve, reject) => {
      db.query(
        'SELECT user_id, username, email, role, created_at, updated_at FROM users WHERE user_id = $1',
        [userId]
      )
        .then((res) => {
          resolve(res.rows[0]);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  updateUser(userId, { username, email }) {
    return new Promise((resolve, reject) => {
      db.query(
        'UPDATE users SET username = $1, email = $2 WHERE user_id = $3 RETURNING username, email, user_id',
        [username, email, userId]
      )
        .then((res) => {
          resolve(res.rows[0]);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  deleteUser(userId) {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM users WHERE user_id = $1 RETURNING *', [userId])
        .then((res) => {
          resolve(res.rows[0]);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

module.exports = models;
