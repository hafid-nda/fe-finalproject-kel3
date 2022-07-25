import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../assets/styles/login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEye,
  faEyeSlash
} from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  const navigate = useNavigate();  
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const [errorResponse, setErrorResponse] = useState({
    isError: false,
    message: "",
  });

  useEffect(() => {
    emailRef.current.focus();
  }, [])

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
      setPassword(e.target.value);
  };
  const togglePassword = () => {
    if(passwordType==="password") {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  };


  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/login', {
      email:email,
      password:password
    })
    .then((res) => {
      const result = res.data
      console.log(result);
      if(result) {
        localStorage.setItem("token", result.accessToken);
        navigate("/");
      }
    }, (err) => {
      console.log(err);
    })
  };

  return (
    <div>
      <div className="container__left">
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
          <form className="form" onSubmit={handleLogin}>
            <Form.Group>
              <label className="form__label" htmlFor="email">Email</label>
              <input 
                className="form__input" 
                onChange={handleEmailChange}
                ref={emailRef}
                value={email}
                type="email" 
                name="email"
                id="email"
                placeholder="Contoh: johndee@gmail.com"
                required
              />
            </Form.Group>
            <label className="form__label" htmlFor="password">Password</label>
            <div className="pass__container">
              <input 
                className="form__input"
                onChange={handlePasswordChange}
                ref={passwordRef}
                value={password}
                type={passwordType}
                name="password" 
                id="password" 
                placeholder="Masukkan password" 
                required
              />
              <button className="pass__eye" type="button" onClick={togglePassword}>
                { passwordType==="password"?
                  <FontAwesomeIcon icon={faEye} size="xl" /> :
                  <FontAwesomeIcon icon={faEyeSlash} size="xl" />
                }
              </button>
            </div>
            {errorResponse.isError && (
              <Alert variant="danger">
                {errorResponse.message}
              </Alert>
            )}
            <button 
              className="btn__dark" 
              type="submit"
            >
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
    </div>
  )
}