import { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";

//create your first component

const Task = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  //listar tareas

  const getTodos = () => {
    fetch("http://localhost:3000/api/tasks")
      .then((response) => {
        if (response.status === 404) {
          createUser();
        }
        return response.json();
      })
      .then((data) => {
        setTodos(data.todos);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //crear usuarios

  const createUser = () => {
    fetch("http://localhost:3000/api/tasks", {
      method: "POST",
      headers: { "content-type": "application/json" },
    })
      .then((response) => {
        if (response.status === 404 || response.status === 200) {
          getTodos();
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //borrar tarea

  const deleteTodos = (id) => {
    fetch("http://localhost:3000/api/tasks/" + id, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((response) => {
        console.log(response);

        if (response.status === 404 || response.status === 204) {
          getTodos();
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  let mensaje = null;

  if (todos.length === 0) {
    mensaje = "No hay tareas, añadir tareas";
  }

  return (
    <div className="container">
      <h1 className="mt-5 mb-5">todos</h1>

      <ul className="mx-auto">
        <li>
          <input
            className="w-100"
            type="text"
            placeholder="What do you need?"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            //crear tarea
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (inputValue.trim().length === 0) {
                  console.log("tarea vacía");
                  return;
                }
                fetch("http://localhost:3000/api/tasks", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify({
                    label: inputValue,
                    is_done: false,
                  }),
                })
                  .then((response) => response.json())
                  .then((data) => {
                    getTodos();

                    setInputValue("");
                  })
                  .catch((error) => console.log(error.message));
              }
            }}
          ></input>
        </li>

        {todos.map((items, index) => (
          <li key={items.id} className="d-flex justify-content-between">
            {items.label}{" "}
            <IoCloseOutline
              className="delete-icon"
              onClick={() => deleteTodos(items.id)}
            />
          </li>
        ))}

        <li className="contador"> {todos.length} item left</li>
      </ul>

      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Task;
