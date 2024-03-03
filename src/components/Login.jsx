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
      <div className='loginBox'>
        LOGIN:
        <label className='loginUsername'>
            Username: <input type='text' onChange={e => setUser(e.target.value)}></input>
        </label>
        <label className='loginPassword'>
            Password: <input type='password' onChange={e => setPassword(e.target.value)}></input>
        </label>
        {errorMessage == "true" && (
          <p>Wrong username or password</p>
        )}
        <button className='loginButton' onClick={() => handleLogin(user, password)}>Login</button>

      </div>
    
  )
}
