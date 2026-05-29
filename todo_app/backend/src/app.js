const express = require("express");
const cors = require("cors");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// rutas
const taskRoutes = require("./routes/task.routes");
const authRoutes = require("./routes/auth.routes");

// endpoints
app.use("/api/tasks", taskRoutes);
app.use("/api/auth", authRoutes);

// levantar servidor
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
