import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCheckDouble } from "react-icons/fa";
//import useGlobalReducer from "../hooks/useGlobalReducer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const { dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Por favor complete los campos");
      return;
    }

    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Contraseña/correo incorrectos");
        return;
      }

      // token jwt
      const token = data.token;

      // guardar token
      localStorage.setItem("token", token);

      alert("Login exitoso");

      navigate("/tasks");
    } catch (error) {
      console.error(error);

      alert("Error en el servidor");
    }
  };

  return (
    <div className="container text-center mt-2 mt-md-5">
      <span className="me-2 " style={{ color: "#86b89a", fontSize: "7rem" }}>
        <FaCheckDouble />
      </span>
      <h1 className="mt-1">Taskify</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-3 bg-light w-75 mx-auto mb-5 shadow-lg">
            <h2 className="mt-5 text-dark text-center">Bienvenido de nuevo</h2>
            <p className="mb-4 text-secondary text-center">
              Inicia sesión en tu cuenta para continuar
            </p>

            <form
              className="row gy-3 mx-auto text-center"
              onSubmit={handleSubmit}
            >
              <div className="col-md-6">
                <div className="input-group">
                  <div className="input-group-text">@</div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="col-6">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Ingrese su contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="col-auto">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="autoSizingCheck"
                  />
                  <label
                    htmlFor="autoSizingCheck"
                    className="form-check-label text-dark"
                  >
                    Recuérdame
                  </label>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-lg text-light"
                  style={{ backgroundColor: "#86b89a" }}
                >
                  Iniciar sesión
                </button>
              </div>

              <p className="mt-3 link-light text-center">
                ¿No tienes cuenta?{" "}
                <Link to="/signup" className="link-dark">
                  Regístrate aquí
                </Link>
              </p>
              <p>
                ¿Olvidaste tu contraseña?
                <Link to="/reset-password" className="link-dark">
                  Restablecer contraseña
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
