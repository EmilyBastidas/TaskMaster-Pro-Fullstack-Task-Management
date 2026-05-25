//importacion express
const express = require("express");
//crear router
const router = express.Router();

//CRUD de tareas
router.get("/", (req, res) => {
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

router.post("/", (req, res) => {
  res.send({
    id: 3,
    title: "aprender javascript",
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.send({
    id,
    title: "aprender javascript",
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send({
    message: `Tarea con id ${id} eliminada`,
  });
});

module.exports = router;
