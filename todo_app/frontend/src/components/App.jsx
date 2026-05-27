import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

//create your first component

const Home = () => {
  //guardo lo datos ingresados

  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  // mensaje si el user no ingresa tareas

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
            onChange={(e) => setInputValue(e.target.value)} // capturo la info del input con onChange
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (inputValue.trim().length === 0) {
                  console.log("el usuario no ha ingresado datos");
                  return;
                }

                setTodos(todos.concat(inputValue));
                setInputValue("");
              }
            }}
          ></input>
        </li>

        {todos.map((items, index) => (
          <li className="d-flex justify-content-between">
            {items}{" "}
            <IoCloseOutline
              className="delete-icon"
              onClick={() =>
                setTodos(
                  todos.filter((t, currentIndex) => index != currentIndex),
                )
              }
            />
          </li>
        ))}

        <li className="contador"> {todos.length} item left</li>
      </ul>

      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Home;
