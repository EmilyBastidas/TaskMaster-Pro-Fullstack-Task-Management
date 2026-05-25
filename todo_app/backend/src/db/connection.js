const dotenv = require("dotenv");
dotenv.config();

const pg = require("pg");

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool
  .query("SELECT NOW()")
  .then((res) => {
    console.log("Connected to the database:", res.rows[0]);
  })
  .catch((err) => {
    console.error("Database connection error", err);
  });

module.exports = pool;
