const db = require('../config/dbConfig');

const models = {
  addLocation(city, address) {
    return new Promise((resolve, reject) => {
      db.query(
        'INSERT INTO locations(city, address) VALUES($1, $2) RETURNING *',
        [city, address]
      )
        .then((res) => {
          resolve(res.rows[0]);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getLocations() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM locations')
        .then((res) => {
          resolve(res.rows);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getLocationById(locationId) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM locations WHERE id = $1', [locationId])
        .then((res) => {
          if (res.rows.length > 0) {
            resolve(res.rows[0]);
          } else {
            reject(new Error(`Location with ID ${locationId} not found.`));
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  updateLocation(locationId, city, address) {
    return new Promise((resolve, reject) => {
      db.query(
        'UPDATE locations SET city = $1, address = $2 WHERE id = $3 RETURNING *',
        [city, address, locationId]
      )
        .then((res) => {
          if (res.rows.length > 0) {
            resolve(res.rows[0]);
          } else {
            reject(new Error(`Location with ID ${locationId} not found.`));
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  deleteLocationById(locationId) {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM locations WHERE id = $1 RETURNING *', [locationId])
        .then((res) => {
          if (res.rows.length > 0) {
            resolve(`Location with ID ${locationId} deleted successfully.`);
          } else {
            reject(new Error(`Location with ID ${locationId} not found.`));
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

module.exports = models;
