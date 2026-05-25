// express
const express = require("express");
const app = express();

//middleware
app.use(express.json());

//rutas
const taskRoutes = require("./routes/task.routes");
app.use("/api/todos", taskRoutes);

//levantar servidor
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
