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
app.use(express.static(path.join(__dirname, 'public')));
app.use('/image', express.static(path.join(__dirname, 'public')));
app.use(routers);

db.connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on post ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
