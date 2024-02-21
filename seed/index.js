const db = require('../src/config/dbConfig');
const genre = require('./genres');
const directors = require('./directors');
const casts = require('./casts');
const movie = require('./movies');
const location = require('./locations');
const premiere = require('./premieres');

db.connect(async (err, client, done) => {
  if (err) {
    console.error(err);
    return;
  }

  try {
    // await genre();
    // await directors();
    // await casts();
    // await movie();
    // await location();
    await premiere();

    console.log(`seed table success`);
    process.exit(0);
  } catch (error) {
    console.log(error);
  }
});
