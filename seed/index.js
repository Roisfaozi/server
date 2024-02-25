const db = require('../src/config/dbConfig');
const genre = require('./genres');
const directors = require('./directors');
const casts = require('./casts');
const movie = require('./movies');
const location = require('./locations');
const premiere = require('./premieres');
const seat = require('./seats');
const booking = require('./booking');
const schedule = require('./schedules');
const ticket = require('./tickets');

db.connect(async (err, client, done) => {
  if (err) {
    console.error(err);
    return;
  }

  try {
    await genre();
    await directors();
    await casts();
    await movie();
    await location();
    await premiere();
    await schedule();
    await seat();
    await booking();
    await ticket();

    console.log(`seed table success`);
    process.exit(0);
  } catch (error) {
    console.log(error);
  }
});
