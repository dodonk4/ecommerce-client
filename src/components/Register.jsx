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
    <div className='loginBox'>
        REGISTER:
        <label className='loginUsername'>
            Username: <input type='text' onChange={e => setUser(e.target.value)}></input>
        </label>
        <label className='loginEmail'>
            Email: <input type='text' onChange={e => setEmail(e.target.value)}></input>
        </label>
        <label className='loginPassword'>
            Password: <input type='password' onChange={e => setPasswordConfirmation(e.target.value)}></input>
        </label>
        <label className='loginPassword'>
            Confirm Password: <input type='password' onChange={e => setPassword(e.target.value)}></input>
        </label>
        {errorMessage == "true" && (
          <p>Wrong username or password</p>
        )}
        <button className='loginButton' onClick={() => handleRegister(user, password)}>Register</button>

      </div>
  )
}

export default Register