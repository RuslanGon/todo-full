import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegistarPage from "./pages/RegistarPage.jsx";
import MainPage from "./pages/MainPage.jsx";
import {AuthContext} from './context/AuthContext.js'
import {useAuth} from './hooks/auth.hook.js'
import "./App.scss";

function App() {
  const { login, logout, token, isReady, userId } = useAuth();

  const isLogin = true;

  return (
    <AuthContext.Provider value={{login, logout, token, isReady, userId}}>
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
    </AuthContext.Provider>
  );
}

export default App;
