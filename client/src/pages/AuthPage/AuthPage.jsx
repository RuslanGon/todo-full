import { Routes, Route } from "react-router-dom";
import "./AuthPage.scss";
import LoginPage from "../LoginPage.jsx";
import RegistarPage from "../RegistarPage.jsx";



const AuthPage = () => {
  return (
    <div className="container auth-page">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistarPage />} />
      </Routes>
    </div>
  );
};

export default AuthPage;
