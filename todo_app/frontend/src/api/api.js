const BASE_URL = "http://localhost:3000/api/tasks";

//listar tareas
export const getTasks = () => {
  return fetch("http://localhost:3000/api/tasks").then((res) => res.json());
};

//crear tarea

export const createTask = (task) => {
  return fetch("http://localhost:3000/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  }).then((res) => res.json());
};

//eliminar tarea

export const deleteTask = (id) => {
  return fetch(`http://localhost:3000/api/tasks/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
};

//actualizar tarea

export const updateTask = (id, task) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  }).then((res) => res.json());
};
