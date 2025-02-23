import { Link } from "react-router-dom"


const LoginPage = () => {
  return (
    <div>
        <div>
    <h3>Авторизация</h3>
    <form className="form form-login">
      <div className="row">
        <div className="input-field col s12">
          <input className="validate" type="email" name="email" id="email-login" />
          <label htmlFor="email-login">Введите email</label>
        </div>
        <div className="input-field col s12">
          <input className="validate" type="password" name="password" id="password-login" />
          <label htmlFor="password-login">Введите пароль</label>
        </div>
      </div>
      <div className="row">
        <button className="waves-effect waves-light btn blue">Войти</button>
        <Link className="btn-outline btn-reg" to="/registration">Нет аккаунта?</Link>
      </div>
    </form>
  </div>
    </div>
  )
}

export default LoginPage