import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaCheckDouble } from "react-icons/fa6";
import { IoLogOutSharp } from "react-icons/io5";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{ backgroundColor: "#020202" }}
    >
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center fw-bold fs-4 text-light"
          href="/login" //cambié
        >
          <span className="me-2 fs-3" style={{ color: "#ac86b8ff" }}>
            <FaCheckDouble />
          </span>
          Taskify
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link active text-white" to="/dashboard">
                Dashboard
              </Link>
            </li>
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
          </ul>
        </div>
      </div>

      <IoLogOutSharp
        size={27}
        style={{ cursor: "pointer", color: "#e9eeebff" }}
        onClick={handleLogout}
        title="Cerrar sesión"
      />
    </nav>
  );
}

export default Navbar;
