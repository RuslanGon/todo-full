import { Link } from "react-router-dom";
import './Registar.scss'
import { useState } from "react";
import axios from "axios";

const RegistarPage = () => {

  const [form, setForm] = useState({ email: '', password: ''})

  const changeHandler = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
    console.log(form);
  }


  axios.defaults.baseURL = "http://localhost:5000";

  const registarHandler = async () => {
    try {
      const response = await axios.post('/api/auth/registration', {...form}, {
        headers: {'Content-Type': 'application/json'}
      });
      console.log(response);
    } catch (error) {
      console.error("Ошибка регистрации:", error);
    }
  };

  return (
    <div>
      <h3>Регистрация</h3>
      <form className="form form-login" onSubmit={e => e.preventDefault()}>
        <div className="row">
          <div className="input-field col s12">
            <input onChange={changeHandler} className="validate" type="email" name="email" id="email-register" />
            <label htmlFor="email-register">Введите email</label>
          </div>
          <div className="input-field col s12">
            <input onChange={changeHandler} className="validate" type="password" name="password" id="password-register" />
            <label htmlFor="password-register">Введите пароль</label>
          </div>
        </div>
        <div className="row ">
          <button onClick={registarHandler} className="waves-effect waves-light btn blue">Регистрация
          </button>
          <Link className="btn-outline btn-reg" to="/login">Уже есть аккаунт?</Link>
        </div>
      </form>
    </div>
  );
};

export default RegistarPage;
