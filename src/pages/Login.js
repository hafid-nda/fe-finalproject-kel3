import '../assets/styles/login.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom';
import { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEye,
  faEyeSlash
} from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (e) => {
      setPasswordInput(e.target.value);
  }
  const togglePassword = () => {
    if(passwordType==="password") {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  }

  return (
    <>
      <div className="container__left" >
        <div className="background">
          <h1 className="brand">Second <br /> Hand.</h1>
        </div>
      </div>
      <div className="container__right">
        <button className="back" type="button">
          <FontAwesomeIcon icon={faArrowLeft}  size="2xl"/>
        </button>
        <div className="masuk">
          <h2>Masuk</h2>
          <form action="" className="form">
            <Form.Group>
              <label className="form__label" htmlFor="email">Email</label>
              <input className="form__input" type="email" name="email" id="email" placeholder="Contoh: johndee@gmail.com" required/>
            </Form.Group>
            <label className="form__label" htmlFor="password">Password</label>
            <div className="pass__container">
              <input className="form__input" onChange={handlePasswordChange} type={passwordType} name="password" id="password" placeholder="Masukkan password" required/>
              <button className="pass__eye" type="button" onClick={togglePassword}>
                { passwordType==="password"?
                  <FontAwesomeIcon icon={faEye} size="xl" /> :
                  <FontAwesomeIcon icon={faEyeSlash} size="xl" />
                }
              </button>
            </div>
            
            <button className="btn__dark" type="submit">
              Masuk
            </button>
          </form>
          <p className="masuk__text">Belum punya akun? 
            <span className="masuk__link">
              <Link to="/register">
                <strong>Daftar di sini</strong>
              </Link>
            </span>
          </p>
        </div>
      </div>
    </>
  )
}