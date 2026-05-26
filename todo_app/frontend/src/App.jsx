import { useState } from "react";
/*import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'*/
import "./App.css";

function App() {
  const [tareas, setTareas] = useState([]);

  return (
    <>
      <h1>TodoList</h1>
      <input type="text" placeholder="Add a new task" />
      <button>Add Task</button>
      <ol>Tarea 1</ol>
      <ol>Tarea 2</ol>
    </>
  );
}

export default App;
