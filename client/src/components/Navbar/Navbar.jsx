import { useContext } from 'react'
import './Navbar.scss'
import { AuthContext } from '../../context/AuthContext.js'

const Navbar = () => {

const {islogin, logout} = useContext(AuthContext)

  return (
    <nav>
      <div className="nav-wrapper navbar blue">
        <a href="/" className="brand-logo">
          Todo app
        </a>
        {islogin ? (
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a onClick={logout} href="/">Выйти</a>
            </li>
          </ul>
        ) : (
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/">Войти</a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar