const API_URL = `${import.meta.env.VITE_BACKEND_URL}/api/tasks`;

// LISTAR
export const getTasks = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Error al obtener tareas");
  }

  return await response.json();
};

// CREAR
export const createTask = async (task) => {
  const token = localStorage.getItem("token");

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(task),
  });

  if (!response.ok) {
    throw new Error("Error al crear tarea");
  }

  return await response.json();
};

// ELIMINAR
export const deleteTask = async (id) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Error al eliminar tarea");
  }

  return true;
};

// ACTUALIZAR
export const updateTask = async (id, updatedTask) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updatedTask),
  });

  if (!response.ok) {
    throw new Error("Error al actualizar tarea");
  }

  return await response.json();
};
