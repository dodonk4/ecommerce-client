import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from "axios"
import { useTogglecontext, useUsercontext } from './userContext/UserProvider'

export const Login = () => {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    // const auth = useAuth();
    const toggleFromContext = useTogglecontext();
    const navigate = useNavigate()

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const errorMessage = queryParams.get('wrongLogin');


    const handleLogin = async () => {

      axios.post(`${import.meta.env.VITE_REACT_APP_API}api/login`,{
        username: user,
        password: password
      }
      )
      .then((response) => {
        toggleFromContext.logAnUser(user);
        localStorage.setItem("token", response.data.token);
        navigate('/', { replace: true })
      }).catch((err) => {
        console.log(err)
        navigate('/login?wrongLogin=true')
      });
      
      
        
    }

  return (
    <div className='loginEnviroment'>
      <div className='loginBox'>
        <b className='loginTitle'>INICIAR SESIÓN</b>
        <div className='usernameBox'>
          <b className='usernameTitle'>USUARIO</b>
          <label className='loginUsername'>
              <input type='text' onChange={e => setUser(e.target.value)}></input>
          </label>
        </div>
        
        <div className='passwordBox'>
          <b className='passwordTitle'>CONTRASEÑA</b>
          <label className='loginPassword'>
              <input type='password' onChange={e => setPassword(e.target.value)}></input>
          </label>
        </div>
        
        {errorMessage == "true" && (
          <p>Usuario o contraseña incorrectos</p>
        )}
        <button className='loginButton' onClick={() => handleLogin(user, password)}>INICIAR SESIÓN</button>

      </div>
    </div>
    
  )
}
