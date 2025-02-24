import { Link } from "react-router-dom";
import './Login.scss'
import { useState } from "react";

const LoginPage = () => {

  const [form, setForm] = useState({ email: '', password: ''})

  const changeHandler = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
    console.log(form);
  }

 

  return (
    <div className="div">
      <h3>Авторизация</h3>
      <form className="form form-login" onSubmit={e => e.preventDefault()}>
        <div className="row">
          <div className="input-field col s12">
            <input onChange={changeHandler}  className="validate" type="email" name="email" id="email-login" />
            <label htmlFor="email-login">Введите email</label>
          </div>
          <div className="input-field col s12">
            <input onChange={changeHandler} className="validate" type="password" name="password" id="password-login" />
            <label htmlFor="password-login">Введите пароль</label>
          </div>
        </div>
        <div className="row">
          <button className="waves-effect waves-light btn blue">Войти</button>
          <Link className="btn-outline btn-reg" to="/registration">Нет аккаунта?</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
