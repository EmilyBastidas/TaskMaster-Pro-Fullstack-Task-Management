import { FaCheckDouble } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="container mt-2 mt-md-5">
      <span className="me-2 fs-1" style={{ color: "#86b89a" }}>
        <FaCheckDouble />
      </span>
      <h1 className="mt-5 mb-5">Taskify</h1>
      <p className="mb-5 text-secondary">
        Organiza tus tareas. Simplifica tu productividad.
      </p>
    </div>
  );
};

export default Home;
