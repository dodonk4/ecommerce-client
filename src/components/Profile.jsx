import { NavLink, useNavigate } from 'react-router-dom'
import { useTogglecontext, useUsercontext } from './userContext/UserProvider'

//REVISAR PORQUE ESTA MAL TODO LO DEL AUTHCONTEXT

export const Profile = (props) => {

    const navigate = useNavigate();
    // const nav = document.getElementByClassName("nav");

    const user = useUsercontext();
    const toggle = useTogglecontext();

    const handleLogout = () => {
      toggle.logOutAnUser();
      localStorage.removeItem("token");
      navigate('/');
    }

    

  return (
    <>
      

      {/* <div className="profileBox">  */}
        
        { user && (
          <div className='headerProfilebox'>
            {/* <h2 className='userName'>{ user }</h2> */}
            <div className="buttonsBox"> 
                  <NavLink className="loginLink" to="/profile">PERFIL</NavLink>
                  <NavLink className="loginLink" to="/shoppingCart">CARRITO</NavLink>
            </div>
            <div className="logoutButton" onClick={() => handleLogout()}>CERRAR SESIÓN</div>
          </div>
            ) }

            {
              !user && (
                <div className="headerProfilebox">
                  <NavLink className="loginLink" to="/login">INICIAR SESIÓN</NavLink>
                  <NavLink className="registerLink" to="/register">REGISTRARSE</NavLink>
                </div>
              
              )
            }

      {/* </div> */}
      <img className='menuLogo' src="images/menu.png" onClick={props.changeClass}></img>
      
    </>
  )
}
