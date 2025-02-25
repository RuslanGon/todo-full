
import { Link, useNavigate } from "react-router-dom";
import './Login.scss'
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext.js";

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const { login, isLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate('/');  
    }
  }, [isLogin, navigate]);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const loginHandler = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', form, {
        headers: { 'Content-Type': 'application/json' }
      });

      login(response.data.token, response.data.userId);
      navigate('/'); 

    } catch (error) {
      console.log(error.response?.data?.message || "Ошибка входа");
    }
  };

  return (
    <div className="div">
      <h3>Авторизация</h3>
      <form className="form form-login" onSubmit={(e) => e.preventDefault()}>
        <div className="row">
          <div className="input-field col s12">
            <input onChange={changeHandler} className="validate" type="email" name="email" id="email-login" />
            <label htmlFor="email-login">Введите email</label>
          </div>
          <div className="input-field col s12">
            <input onChange={changeHandler} className="validate" type="password" name="password" id="password-login" />
            <label htmlFor="password-login">Введите пароль</label>
          </div>
        </div>
        <div className="row">
          <button onClick={loginHandler} className="waves-effect waves-light btn blue">Войти</button>
          <Link className="btn-outline btn-reg" to="/registration">Нет аккаунта?</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
