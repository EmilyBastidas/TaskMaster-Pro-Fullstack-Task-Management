import { FaCheckDouble } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { IoLogoOctocat } from "react-icons/io5";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="d-flex align-items-center bg-dark text-white py-5">
      <div className="container text-center mt-2 mt-md-5">
        <span className="me-2 fs-1" style={{ color: "#08c1f9ff" }}>
          <FaCheckDouble />
        </span>
        <h1 className="mt-5 mb-5">Taskify</h1>
        <p className="mb-5 text-secondary">
          Organiza tus tareas. Simplifica tu productividad.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Link to="/login" className="btn btn-info btn-lg px-5 rounded-pill">
            {" "}
            <FaHeart className="me-2" /> Inicia sesión{" "}
          </Link>
          <Link to="/signup" className="btn btn-info btn-lg px-5 rounded-pill">
            {" "}
            <IoLogoOctocat className="me-2" /> Registrate{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
