import { Link } from "react-router-dom"


const RegistarPage = () => {
  return (
    <div>
    <h3>Регистрация</h3>
    <form className="form form-login">
      <div className="row">
        <div className="input-field col s12">
          <input className="validate" type="email" name="email" id="email-register" />
          <label htmlFor="email-register">Введите email</label>
        </div>
        <div className="input-field col s12">
          <input className="validate" type="password" name="password" id="password-register" />
          <label htmlFor="password-register">Введите пароль</label>
        </div>
      </div>
      <div className="row">
        <button className="waves-effect waves-light btn blue">Регистрация</button>
        <Link className="btn-outline btn-reg" to="/login">Уже есть аккаунт?</Link>
      </div>
    </form>
  </div>
  )
}

export default RegistarPage