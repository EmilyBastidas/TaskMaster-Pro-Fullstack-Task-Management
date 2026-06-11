require("dotenv").config();

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

// puerto para local y producción
const PORT = process.env.PORT || 3000;

// levantar servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
