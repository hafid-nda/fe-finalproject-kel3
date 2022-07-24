import 'bootstrap/dist/css/bootstrap.css';
import './navbar.css'

import { Link } from 'react-router-dom';

import Logo from '../assets/images/logo.png';

import Notif from './notif'
import './notif.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListUl,
  faUser,
  faSearch,
  faRightToBracket
} from "@fortawesome/free-solid-svg-icons";

export function HandleLogin(islogin) {
  if(islogin === false) {
    return <NavbarMenu />
  } else {
    return (
      <a href="/login">
        <button
          type="button"
          className="button btn__purple"
        >
          <FontAwesomeIcon icon={faRightToBracket}  size="lg"/>
          Masuk
        </button>
      </a>
    )
  }
}

function NavbarMenu() {
  return (
    <nav>
      <Link to="/daftarjual"> 
        <button className="nav__btn" type="button" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Daftar Jual">
          <FontAwesomeIcon icon={faListUl}  size="lg"/>
        </button>
      </Link>

      <Notif/>

      <Link to="/profil"> 
        <button className="nav__btn" type="button" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Profil">
          <FontAwesomeIcon icon={faUser}  size="lg"/>
        </button>
      </Link>
    </nav>
  )
}

const Navbar = () => {
  return (
    <>
      <header>
        <Link to="/">
          <img className="logo" src={Logo} alt="" />
        </Link>
        <div class="search col-md-6 mb-4">
          <div class="input-group md-form form-sm form-2 pl-0">
            <input class="form-control my-0 py-1 amber-border" type="text" placeholder="Search" aria-label="Search"/>
            <div class="input-group-append">
              <span class="search__icon input-group-text amber lighten-3" id="basic-text1">
                <FontAwesomeIcon icon={faSearch}  size="lg"/>
              </span>
            </div>
          </div>
        </div>

        {/* <NavbarMenu /> */}
        <HandleLogin islogin={true} />
      </header>
      </>
  )
}

export default Navbar;