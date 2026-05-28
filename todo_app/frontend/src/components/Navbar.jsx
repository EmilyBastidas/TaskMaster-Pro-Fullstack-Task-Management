import { Link } from "react-router-dom";
import { FaCheckDouble } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-dark">
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center fw-bold fs-4 text-white"
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
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
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
    </nav>
  );
}

export default Navbar;
