import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegistarPage from "./pages/RegistarPage.jsx";
import "./App.scss";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
        <Route path="/" element={<h1>Главная страница</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistarPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
