const pgp = require('pg-promise')();
require('dotenv').config();
const dbConfig = {
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false, // Accept self-signed certificates
  }
};

const db = pgp({
    ...dbConfig,
    max: 20, // maximum number of connections in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
  });
module.exports = db;