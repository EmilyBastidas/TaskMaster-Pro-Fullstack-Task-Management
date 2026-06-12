import { FaCheckDouble } from "react-icons/fa6";
import { RiFocus2Line } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { IoLogoOctocat } from "react-icons/io5";
import { FaBoltLightning } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { AiTwotoneDashboard } from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="d-flex align-items-center bg-light text-dark py-5">
        <div className="container text-center mt-2 mt-md-5">
          <span className="me-2" style={{ color: "#86b89a", fontSize: "7rem" }}>
            <FaCheckDouble />
          </span>
          <h1 className="mt-5 mb-5">Taskify</h1>
          <p className="mb-5 text-secondary">
            Organiza tus tareas. Simplifica tu productividad.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/login" className="btn btn-dark btn-lg px-5 ">
              {" "}
              <FaHeart className="me-2" /> Inicia sesión{" "}
            </Link>
            <Link to="/signup" className="btn btn-dark btn-lg px-5 ">
              {" "}
              <IoLogoOctocat className="me-2" /> Registrate{" "}
            </Link>
          </div>
        </div>
      </section>

      <section
        className="text-center py-5"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container">
          <div className="row mt-4 justify-content-center">
            <div className="col-md-6">
              <div
                className="card text-bg-light mb-3 shadow-lg"
                style={{ maxWidth: "100rem" }}
              >
                <span
                  className=" p-3 ms-2"
                  style={{ color: "#86b89a", fontSize: "7rem" }}
                >
                  <AiTwotoneDashboard />
                </span>

                <div className="card-body">
                  <h5 className="card-title">
                    Obtén un record de tus tareas completadas
                  </h5>
                  <p className="card-text">
                    Observa tu dashboard personal y celebra tu progreso con
                    estadísticas visuales de tus tareas completadas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center bg-light py-5">
        <div className="container">
          <h2>Todo lo que necesitas para mantenerte organizado</h2>

          <div className="row mt-4 justify-content-center">
            <div className="col-md-4">
              <div
                className="card text-bg-light mb-3"
                style={{ maxWidth: "18rem" }}
              >
                <span className="fs-1 p-3 ms-2" style={{ color: "#7c08a0ff" }}>
                  <FaBoltLightning />
                </span>

                <div className="card-body">
                  <h5 className="card-title">Rapidez increíble</h5>
                  <p className="card-text">
                    Añade, edita y gestiona tareas en segundos con nuestra
                    interfaz intuitiva.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="card text-bg-light mb-3"
                style={{ maxWidth: "18rem" }}
              >
                <span className="fs-1 p-3 ms-2" style={{ color: "#7c08a0ff" }}>
                  <RiFocus2Line />
                </span>
                <div className="card-body">
                  <h5 className="card-title">Manténgase enfocado</h5>
                  <p className="card-text">
                    Organiza tus tareas por prioridad y no te pierdas ninguna
                    fecha límite importante.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="card text-bg-light mb-3"
                style={{ maxWidth: "18rem" }}
              >
                <span className="fs-1 p-3 ms-2" style={{ color: "#7c08a0ff" }}>
                  <FaUsers />
                </span>
                <div className="card-body">
                  <h5 className="card-title">Colabora</h5>
                  <p className="card-text">
                    Trabaja en equipo y comparte tus tareas con otros usuarios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
