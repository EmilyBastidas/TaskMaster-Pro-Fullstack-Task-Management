import { useEffect, useState, useCallback } from "react";
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

  // CARGAR TAREAS (fuente única de verdad)
  const refreshTasks = useCallback(async () => {
    try {
      const data = await getTasks();
      setTodos(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error cargando tareas:", error);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/", { replace: true });
        return;
      }

      try {
        const data = await getTasks();
        setTodos(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error cargando tareas:", error);
      }
    };

    init();
  }, [navigate]);

  // CREAR TAREA
  const handleAddTask = async () => {
    if (!inputValue.trim()) {
      setError(true);
      return;
    }

    setError(false);

    try {
      await createTask({ title: inputValue });
      setInputValue("");
      await refreshTasks();
    } catch (error) {
      console.error("Error creando tarea:", error);
    }
  };

  // ✏️ EDITAR TAREA
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

  // ELIMINAR
  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      await refreshTasks();
    } catch (error) {
      console.error("Error eliminando tarea:", error);
    }
  };

  // TOGGLE COMPLETADO
  const handleToggleComplete = async (task) => {
    try {
      await updateTask(task.id, {
        ...task,
        is_done: !task.is_done,
      });

      await refreshTasks();
    } catch (error) {
      console.error("Error al cambiar estado:", error);
    }
  };

  return (
    <div className="container mt-5 p-5" style={{ maxWidth: "700px" }}>
      {/* HEADER */}
      <div className="mb-4">
        <h1 className="fw-bold text-dark m-0">My Tasks</h1>
        <p className="text-muted small mt-1">
          {todos.length} active • 0 completed
        </p>
      </div>

      {/* ADD TASK */}
      <div className="card border-0 shadow-sm rounded-4 p-3 mb-3 bg-white">
        <div className="row g-2">
          <div className="col">
            <input
              type="text"
              className={`form-control bg-light rounded-3 py-2 ${
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

      {/* SEARCH (visual only) */}
      <div className="position-relative mb-4">
        <span className="position-absolute top-50 start-0 translate-middle-y ps-3 text-muted">
          <BiSearch size={18} />
        </span>
        <input
          type="text"
          className="form-control bg-white rounded-3 py-2 ps-5"
          placeholder="Search tasks..."
          disabled
        />
      </div>

      {/* TASK LIST */}
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
                      className={`form-control form-control-sm ${
                        editError ? "is-invalid" : ""
                      }`}
                      value={editValue}
                      onChange={(e) => {
                        setEditValue(e.target.value);
                        if (e.target.value.trim()) setEditError(false);
                      }}
                    />

                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => handleUpdateTask(task.id)}
                    >
                      <MdCheck />
                    </button>

                    <button
                      className="btn btn-light btn-sm border"
                      onClick={() => {
                        setEditingId(null);
                        setEditError(false);
                      }}
                    >
                      <MdClose />
                    </button>
                  </div>

                  {editError && (
                    <small className="text-danger">
                      El texto no puede estar vacío
                    </small>
                  )}
                </div>
              ) : (
                <>
                  <div className="d-flex align-items-center gap-3">
                    <div
                      onClick={() => handleToggleComplete(task)}
                      className={`rounded-circle border d-flex align-items-center justify-content-center ${
                        task.is_done
                          ? "border-success bg-success text-white"
                          : "border-secondary"
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
                      className={
                        task.is_done
                          ? "text-decoration-line-through text-muted"
                          : ""
                      }
                    >
                      {task.title}
                    </span>
                  </div>

                  <div className="d-flex gap-1">
                    <button
                      className="btn btn-link text-secondary"
                      onClick={() => {
                        setEditingId(task.id);
                        setEditValue(task.title);
                      }}
                    >
                      <MdModeEdit />
                    </button>

                    <button
                      className="btn btn-link text-danger"
                      onClick={() => handleDeleteTask(task.id)}
                    >
                      <MdDeleteForever />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <div className="text-center text-muted">No tienes tareas aún</div>
        )}
      </div>
    </div>
  );
};

export default Task;
