require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const routers = require('./src/routers');
const db = require('./src/config/dbConfig');
const cors = require('cors');
const app = express();
const PORT = 8001;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(express.static('./public'));
app.use('/image', express.static(path.join(__dirname, './public/images')));
app.use(routers);

db.connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on post ${PORT}`);
      console.log(`server running on post  user: ${process.env.PGUSER},
  host: ${process.env.PGHOST},
  database: ${process.env.PGDATABASE},
  password: ${process.env.PGPASSWORD},
  port: ${process.env.PGPORT},`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
module.exports = app;
