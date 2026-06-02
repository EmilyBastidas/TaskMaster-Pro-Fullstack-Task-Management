import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaCheckDouble } from "react-icons/fa";

const Signup = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const handleRegistro = async (e) => {
    e.preventDefault();

    // Validar campos vacíos
    if (
      !name.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !password ||
      !confirmPassword
    ) {
      alert("Por favor complete todos los campos");
      return;
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Ingrese un correo electrónico válido");
      return;
    }

    // Validar longitud mínima de contraseña
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    // Validar coincidencia de contraseñas
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            last_name: lastName,
            email,
            password,
          }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Error al registrarse");
        return;
      }

      alert("Usuario creado exitosamente");
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
      alert("Error en el servidor");
    }
  };
  return (
    <div className="container text-center mt-2 mt-md-5">
      <span className="me-2 " style={{ color: "#86b89a", fontSize: "4rem" }}>
        <FaCheckDouble />
      </span>
      <h2 className="mt-1">Taskify</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5 bg-light mx-auto shadow-lg mb-3">
            <h2 className="mt-5 mb-5 text-dark text-center">Registrarse</h2>

            <form className="row gy-3 mx-auto text-center">
              <div className="col-4">
                <input
                  type="text"
                  className="form-control"
                  id="autoSizingInputName"
                  placeholder="Nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                ></input>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  className="form-control"
                  id="autoSizingInputLastname"
                  placeholder="Apellido"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                ></input>
              </div>
              <div className="col-4">
                <div className="input-group">
                  <div className="input-group-text">@</div>
                  <input
                    type="email"
                    className="form-control"
                    id="autoSizingInputGroupEmail"
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
                  id="autoSizingInputPassword"
                  placeholder="Ingrese su contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                ></input>
              </div>
              <div className="col-6">
                <input
                  type="password"
                  className="form-control"
                  id="autoSizingInputConfirmPassword"
                  placeholder="Confirme contraseña"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                ></input>
              </div>

              <div className="col-auto">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="autoSizingCheck"
                  ></input>
                  <label
                    htmlFor="autoSizingCheck"
                    className="form-check-label text-dark"
                  >
                    Recuédame
                  </label>
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-lg text-light"
                  style={{ backgroundColor: "#86b89a" }}
                  onClick={handleRegistro}
                >
                  Registrarme
                </button>
              </div>
              <p className="mt-3 text-dark text-center">
                ¿Ya tienes cuenta?{" "}
                <Link to="/login" className="link-info">
                  Inicia sesión
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
