import axios from 'axios';
import React, { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useTogglecontext } from './userContext/UserProvider';
function Register() {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate()
    
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const errorMessage = queryParams.get('wrongRegister');

    const handleRegister = async () => {
        

        if(password === passwordConfirmation) {

            axios.post(`${import.meta.env.VITE_REACT_APP_API}api/register`,{
                username: user,
                password: password,
                email: email,
                shoppingCart: [],
              }
              )
              .then((response) => {
                navigate('/login')
              }).catch((err) => {
                console.log(err)
                navigate('/register?wrongRegister=true')
              });
        }
          
      }


  return (
    <div className='formEnviroment'>
      <div className='formBox'>
        <img className='goBackButton' onClick={() => navigate("/")} src='../images/backArrow.png'></img>
        <b className='formTitle'>REGISTRARSE</b>
        <div className='labelBox'>
          <b>USUARIO</b>
          <label className='loginUsername'>
            <input type='text' onChange={e => setUser(e.target.value)}></input>
          </label>
        </div>
       
        <div className='labelBox'>
          <b>CORREO ELECTRÓNICO</b>
          <label className='loginEmail'>
            <input type='text' onChange={e => setEmail(e.target.value)}></input>
          </label>
        </div>

        <div className='labelBox'>
          <b>CONTRASEÑA</b>
          <label className='loginPassword'>
            <input type='password' onChange={e => setPasswordConfirmation(e.target.value)}></input>
          </label>
        </div>
        
       

        <div className='labelBox'>
          <b>CONFIRMAR CONTRASEÑA</b>
          <label className='loginPassword'>
            <input type='password' onChange={e => setPassword(e.target.value)}></input>
          </label>
        </div>
        
        {errorMessage == "true" && (
          <p>USUARIO O CONTRASEÑA INCORRECTOS</p>
        )}
        <button className='formButton' onClick={() => handleRegister(user, password)}>REGISTRARSE</button>
        <div className='registerLink' onClick={() => navigate("/login")}>¿Ya tienes una cuenta? ¡Inicia sesión!</div>
      </div>
        
      </div>
  )
}

export default Register