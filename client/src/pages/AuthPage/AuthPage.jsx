
const AuthPage = () => {
 
  return (
    <div className="container">
      <div className="auth-page">
        <h3>Авторизация</h3>
        <form className="form form-login">
          <div className="row">
            <div className="input-field col s12">
              <input className="validate" type="email" name="email" id="email" />
              <label htmlFor="email">Введите email</label>
            </div>
            <div className="input-field col s12">
              <input className="validate" type="password" name="password" id="password" />
              <label htmlFor="password">Введите password</label>
            </div>
          </div>
          <div className="row">
            <button className="waves-effect waves-light btn blue">Войти</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
