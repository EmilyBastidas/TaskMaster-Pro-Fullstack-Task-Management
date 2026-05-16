// exporto express
const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const pg = require("pg");
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

pool
  .query("SELECT NOW()")
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Database connection error", err);
  });

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

//rutas CRUD
app.get("/task", (req, res) => {
  res.send([
    {
      id: 1,
      title: "Aprender APIs",
    },
    {
      id: 2,
      title: "Aprender Node",
    },
  ]);
});

app.post("/task", (req, res) => {
  res.send({
    id: 3,
    title: "aprender javascript",
  });
});

app.put("/task/:id", (req, res) => {
  const { id } = req.params;
  res.send({
    id,
    title: "aprender javascript",
  });
});

app.delete("/task/:id", (req, res) => {
  const { id } = req.params;
  res.send({
    message: `Tarea con id ${id} eliminada`,
  });
});
