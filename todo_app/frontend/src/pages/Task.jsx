import { useEffect, useState } from "react";
import { getTasks, createTask, deleteTask } from "../api/tasks.api";

const Task = () => {
  //estados para almacenar las tareas

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  //listar tareas

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const data = await getTasks();
    setTodos(data);
  };

  //crear tarea

  const handleAddTask = async () => {
    if (!inputValue.trim()) return;

    const newTask = {
      title: inputValue,
    };

    await createTask(newTask);

    setInputValue("");
    loadTasks(); // recarga lista actualizada
  };

  //eliminar tarea

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks(); // recarga lista actualizada
  };

  return (
    <div>
      <h1>To Do List</h1>

      <input
        type="text"
        placeholder="Escribe una tarea..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={handleAddTask}>Agregar</button>

      <ul>
        {todos.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>

      <ul>
        {todos.map((task) => (
          <li key={task.id}>
            {task.title}

            <button onClick={() => handleDelete(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task;
