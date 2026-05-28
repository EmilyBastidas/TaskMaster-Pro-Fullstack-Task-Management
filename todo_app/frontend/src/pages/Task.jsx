import { useEffect, useState } from "react";
import { getTasks, createTask, deleteTask } from "../api/tasks.api";
import { MdDeleteForever } from "react-icons/md";

const Task = () => {
  //estados para almacenar las tareas

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  //listar tareas

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      setTodos(Array.isArray(data) ? data : []);
    };

    fetchTasks();
  }, []);

  //crear tarea

  const handleAddTask = async () => {
    if (!inputValue.trim()) return;

    const newTask = {
      title: inputValue,
    };

    const created = await createTask(newTask);
    setTodos((prev) => [...prev, created]);
    setInputValue("");
  };

  //eliminar tarea

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTodos((prev) => prev.filter((t) => t.id !== id));
    } catch (error) {
      console.error("Error eliminando tarea:", error);
    }
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
            <button onClick={() => handleDeleteTask(task.id)}>
              <MdDeleteForever />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task;
