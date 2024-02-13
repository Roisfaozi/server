const db = require('../config/dbConfig');

const models = {
  addUser({ username, password, email }) {
    return new Promise((resolve, reject) => {
      db.query(
        'INSERT INTO users(username, password, email) VALUES($1, $2, $3) RETURNING *',
        [username, password, email]
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
      db.query('SELECT * FROM users')
        .then((res) => {
          resolve(res.rows);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getUserById(userId) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM users WHERE user_id = $1', [userId])
        .then((res) => {
          resolve(res.rows[0]);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  updateUser(userId, { username, password, email }) {
    return new Promise((resolve, reject) => {
      db.query(
        'UPDATE users SET username = $1, password = $2, email = $3 WHERE user_id = $4 RETURNING *',
        [username, password, email, userId]
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
