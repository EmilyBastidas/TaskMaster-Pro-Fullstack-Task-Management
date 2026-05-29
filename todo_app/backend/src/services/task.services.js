const pool = require("../db/connection");

const getTasks = async () => {
  const result = await pool.query("SELECT * FROM tasks ORDER BY id ASC");
  return result.rows;
};

const createTask = async (title, userId) => {
  const result = await pool.query(
    `
    INSERT INTO tasks (title, user_id)
    VALUES ($1, $2)
    RETURNING *
    `,
    [title, userId],
  );

  return result.rows[0];
};

const updateTask = async (id, data) => {
  const result = await pool.query(
    "UPDATE tasks SET title = $1, completed = $2 WHERE id = $3 RETURNING *",
    [data.title, data.completed, id],
  );
  return result.rows[0];
};

const deleteTask = async (id) => {
  await pool.query("DELETE FROM tasks WHERE id = $1", [id]);
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
