// exporto express
const express = require("express");
const app = express();

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
