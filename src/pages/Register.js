import { Link, useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react';
import axios from 'axios'
import Alert from 'react-bootstrap/Alert'

import '../assets/styles/login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEye,
  faEyeSlash
} from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const navigate = useNavigate();  
  const nameRef = useRef("");
  const emailRef = useRef("");
  const roleRef = useRef("");
  const passwordRef = useRef("");

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const [errorResponse, setErrorResponse] = useState({
    isError: false,
    message: "",
  });

  useEffect(() => {
    nameRef.current.focus();
  }, [])

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };
  const handlePasswordChange =(e)=>{
      setPassword(e.target.value);
  }
  const togglePassword =()=>{
    if(passwordType==="password") {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userToRegisterPayload = {
          name: nameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
          role: roleRef.current.value
      };
      const registerRequest = await axios.post(
          "http://localhost:2000/api/v1/register",
          userToRegisterPayload
      );
      const registerResponse = registerRequest.data;
      if (registerResponse.status) navigate("/login");
  } catch (err) {
      console.log(err);
      const response = err.response.data;
      setErrorResponse({
        isError: true,
        message: response.message,
      });
    }
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
          <FontAwesomeIcon icon={faArrowLeft} size="2xl" />
        </button>
        <div className="masuk">
          <h2>Daftar</h2>
          <form onSubmit={handleRegister} className="form">
            <label className="form__label" htmlFor="name">Nama</label>
            <input 
              className="form__input" 
              ref={nameRef}
              value={name}
              onChange={handleNameChange}
              type="text" 
              name="name" 
              id="name" 
              placeholder="Nama Lengkap" 
              required
            />

            <label className="form__label" htmlFor="email">Email</label>
            <input 
              className="form__input" 
              ref={emailRef}
              value={email}
              onChange={handleEmailChange}
              type="email" 
              name="email" 
              id="email" 
              placeholder="Contoh: johndee@gmail.com" 
              required
            />
            
            {/* <label className="form__label" htmlFor="role">Role</label>
            <select 
              className="form__input" 
              ref={roleRef}
              onChange={handleRoleChange}
              required
            >
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select> */}
            
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
              <Alert variant="danger">{errorResponse.message}</Alert>
            )}
            <button className="btn__dark" type="submit">Daftar</button>
          </form>
          <p className="masuk__text">Sudah punya akun? 
            <span className="masuk__link">
              <Link to="/login">
                <strong>Masuk di sini</strong>
              </Link>
            </span>
          </p>
        </div>
      </div>
    </>
  )
}

export default Register;