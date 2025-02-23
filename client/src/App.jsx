import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import "./App.scss";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
        <Route path="/" element={<h1>Главная страница</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegisterPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
