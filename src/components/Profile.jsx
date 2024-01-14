import { NavLink, useNavigate } from 'react-router-dom'
import { useTogglecontext, useUsercontext } from './userContext/UserProvider'

//REVISAR PORQUE ESTA MAL TODO LO DEL AUTHCONTEXT

export const Profile = () => {

    const navigate = useNavigate();

    const user = useUsercontext();
    const toggle = useTogglecontext();

    const handleLogout = () => {
      toggle.logOutAnUser();
      localStorage.removeItem("token");
      navigate('/');
    }


  return (
    <div>
      { user && (
        <>
          <h2>Welcome { user }</h2>
          <button onClick={() => handleLogout()}>Logout</button>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/shoppingCart">Cart</NavLink>
        </>
      ) }

      {
        !user && (
          <NavLink className="loginLink" to="/login">Iniciar Sesión</NavLink>
        )
      }
    </div>
  )
}
