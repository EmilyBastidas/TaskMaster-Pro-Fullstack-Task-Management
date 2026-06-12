import { Link, useNavigate } from "react-router-dom";
import { FaCheckDouble } from "react-icons/fa6";
import { IoLogOutSharp } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{ backgroundColor: "#020202" }}
    >
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center fw-bold fs-4 text-light"
          href="/"
        >
          <span className="me-2 fs-3" style={{ color: "#86b89a" }}>
            <FaCheckDouble />
          </span>
          Taskify
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link active text-white" to="/">
                Dashboard
              </Link>
            </li>

            {!isAuthenticated && (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/login">
                    Inicio de sesión
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-white" to="/signup">
                    Registrarse
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      {isAuthenticated && (
        <IoLogOutSharp
          className="p-3"
          size={27}
          style={{ cursor: "pointer", color: "#b6bcb9ff" }}
          onClick={handleLogout}
          title="Cerrar sesión"
        />
      )}
    </nav>
  );
};

export default Navbar;
