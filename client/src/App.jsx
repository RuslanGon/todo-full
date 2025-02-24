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

  const isLogin = !! token

  return (
    <AuthContext.Provider value={{ login, logout, token, isReady, userId, isLogin }}>
      <div>
        <Navbar />
        <div className="container">
          <Routes>
            {isLogin ? (
              <>
                <Route path="/" element={<MainPage />} />
                {/* Добавьте маршруты для авторизованного пользователя */}
              </>
            ) : (
              <>
                <Route path="/" element={<LoginPage />} />
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
