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
      db.query('SELECT * FROM users ORDER BY created_at DESC')
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
      console.log(username);
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
