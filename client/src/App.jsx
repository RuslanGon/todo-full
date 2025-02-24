import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegistarPage from "./pages/RegistarPage.jsx";
import MainPage from "./pages/MainPage.jsx";
import "./App.scss";

function App() {
 
  const isLogin = true; 

  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          {/* Условный рендеринг маршрутов в зависимости от состояния isLogin */}
          {isLogin ? (
            <>
              <Route path="/" element={<MainPage />} />
              {/* Добавьте другие маршруты для авторизованного пользователя */}
            </>
          ) : (
            <>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/registration" element={<RegistarPage />} />
            </>
          )}
        </Routes>
      </div>
    </div>
  );
}

export default App;
