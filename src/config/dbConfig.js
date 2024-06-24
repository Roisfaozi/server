require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  ssl: true,
  max: 10,
  min: 0,
  idleTimeoutMillis: 8000,
  connectionTimeoutMillis: 8000,
});

module.exports = pool;
