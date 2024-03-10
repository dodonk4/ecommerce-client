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
    <div className="profileBox" >
      { user && (
        <>
          <h2 className='userName'>{ user }</h2>
          <NavLink className="loginLink" to="/profile">Profile</NavLink>
          <NavLink className="loginLink" to="/shoppingCart">Cart</NavLink>
          <div className="logoutButton" onClick={() => handleLogout()}>Logout</div>
        </>
      ) }

      {
        !user && (
          <div className="logAndRegisterBox">
            <NavLink className="loginLink" to="/login">Iniciar Sesión</NavLink>
            <NavLink className="registerLink" to="/register">Registrarse</NavLink>
          </div>
         
        )
      }
    </div>
  )
}
