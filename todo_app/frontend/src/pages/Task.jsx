import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTasks, createTask, deleteTask, updateTask } from "../api/api";
import { MdDeleteForever, MdModeEdit, MdCheck, MdClose } from "react-icons/md";
import { BiPlus, BiSearch } from "react-icons/bi";

const Task = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [editError, setEditError] = useState(false);

  const navigate = useNavigate();

  // 🔥 FUNCIÓN CENTRAL PARA CARGAR TAREAS
  const refreshTasks = async () => {
    try {
      const data = await getTasks();
      setTodos(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error cargando tareas:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    refreshTasks();
  }, [navigate]);

  // ➕ AGREGAR TAREA
  const handleAddTask = async () => {
    if (!inputValue.trim()) {
      setError(true);
      return;
    }

    setError(false);

    try {
      await createTask({ title: inputValue });
      setInputValue("");
      await refreshTasks(); // 👈 importante
    } catch (error) {
      console.error("Error creando tarea:", error);
    }
  };

  // ✏️ ACTUALIZAR TAREA
  const handleUpdateTask = async (id) => {
    if (!editValue.trim()) {
      setEditError(true);
      return;
    }

    setEditError(false);

    try {
      await updateTask(id, { title: editValue });
      setEditingId(null);
      setEditValue("");
      await refreshTasks();
    } catch (error) {
      console.error("Error modificando tarea:", error);
    }
  };

  // 🗑️ ELIMINAR TAREA
  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      await refreshTasks();
    } catch (error) {
      console.error("Error eliminando tarea:", error);
    }
  };

  // ✔ TOGGLE COMPLETADO
  const handleToggleComplete = async (task) => {
    try {
      const updatedTaskBody = {
        ...task,
        is_done: !task.is_done,
      };

      await updateTask(task.id, updatedTaskBody);
      await refreshTasks();
    } catch (error) {
      console.error("Error al cambiar el estado de la tarea:", error);
    }
  };

  return (
    <div className="container mt-5 p-5" style={{ maxWidth: "700px" }}>
      {/* ENCABEZADO */}
      <div className="mb-4">
        <h1 className="fw-bold text-dark m-0">My Tasks</h1>
        <p className="text-muted small mt-1">
          {todos.length} active • 0 completed
        </p>
      </div>

      {/* AGREGAR TAREA */}
      <div className="card border-0 shadow-sm rounded-4 p-3 mb-3 bg-white">
        <div className="row g-2">
          <div className="col">
            <input
              type="text"
              className={`form-control border-light-subtle bg-light-subtle rounded-3 py-2 ${
                error ? "is-invalid" : ""
              }`}
              placeholder="Add a new task..."
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                if (e.target.value.trim()) setError(false);
              }}
            />
            <div className="invalid-feedback ps-1">
              La tarea no puede estar vacía
            </div>
          </div>

          <div className="col-auto">
            <button
              className="btn text-white px-4 py-2 rounded-3 d-flex align-items-center gap-1"
              style={{ backgroundColor: "#7c08a0ff", border: "none" }}
              onClick={handleAddTask}
              disabled={!inputValue.trim()}
            >
              <BiPlus size={20} /> Add
            </button>
          </div>
        </div>
      </div>

      {/* SEARCH */}
      <div className="position-relative mb-4">
        <span className="position-absolute top-50 start-0 translate-middle-y ps-3 text-muted">
          <BiSearch size={18} />
        </span>
        <input
          type="text"
          className="form-control border-light-subtle bg-white rounded-3 py-2 ps-5"
          placeholder="Search tasks..."
          disabled
        />
      </div>

      {/* TASK LIST */}
      <div className="mb-3">
        <h6 className="fw-bold text-secondary d-flex align-items-center gap-2 mb-3">
          <span className="text-success">☰</span> Active Tasks ({todos.length})
        </h6>

        <div className="d-flex flex-column gap-2">
          {todos.length > 0 ? (
            todos.map((task) => (
              <div
                key={task.id}
                className="card border-0 shadow-sm rounded-4 p-3 bg-white d-flex flex-row justify-content-between align-items-center"
              >
                {editingId === task.id ? (
                  <div className="w-100">
                    <div className="d-flex gap-2 align-items-center">
                      <input
                        type="text"
                        className={`form-control form-control-sm border-light-subtle rounded-3 py-2 ${
                          editError ? "is-invalid" : ""
                        }`}
                        value={editValue}
                        onChange={(e) => {
                          setEditValue(e.target.value);
                          if (e.target.value.trim()) setEditError(false);
                        }}
                      />

                      <button
                        className="btn btn-sm btn-success rounded-3 p-2 d-flex align-items-center"
                        onClick={() => handleUpdateTask(task.id)}
                      >
                        <MdCheck size={18} />
                      </button>

                      <button
                        className="btn btn-sm btn-light border rounded-3 p-2 d-flex align-items-center text-secondary"
                        onClick={() => {
                          setEditingId(null);
                          setEditError(false);
                        }}
                      >
                        <MdClose size={18} />
                      </button>
                    </div>

                    {editError && (
                      <div className="text-danger small ps-1 mt-1">
                        El texto de la tarea no puede quedar vacío
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <div className="d-flex align-items-center gap-3">
                      <div
                        onClick={() => handleToggleComplete(task)}
                        className={`rounded-circle border border-2 d-flex align-items-center justify-content-center ${
                          task.is_done
                            ? "border-success bg-success text-white"
                            : "border-secondary-subtle bg-white"
                        }`}
                        style={{
                          width: "22px",
                          height: "22px",
                          cursor: "pointer",
                        }}
                      >
                        {task.is_done && <MdCheck size={14} />}
                      </div>

                      <span
                        className={`fw-medium ${
                          task.is_done
                            ? "text-secondary text-decoration-line-through opacity-50"
                            : "text-dark"
                        }`}
                      >
                        {task.title}
                      </span>
                    </div>

                    <div className="d-flex gap-1">
                      <button
                        className="btn btn-link text-secondary p-2 border-0"
                        onClick={() => {
                          setEditingId(task.id);
                          setEditValue(task.title);
                        }}
                      >
                        <MdModeEdit size={20} />
                      </button>

                      <button
                        className="btn btn-link text-danger p-2 border-0"
                        onClick={() => handleDeleteTask(task.id)}
                      >
                        <MdDeleteForever size={22} />
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-4 text-muted bg-white rounded-4 shadow-sm">
              No tienes tareas activas hoy
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Task;
