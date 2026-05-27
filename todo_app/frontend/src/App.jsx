import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {" "}
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="*"
            element={
              <div className="text-center py-5">
                <h1>404 - Página no encontrada</h1>
                <p>Lo sentimos, esta página no existe.</p>
              </div>
            }
          />
        </Routes>
      </main>
      {/* Footer */}
      {Footer && <Footer />}
    </div>
  );
}

export default App;
