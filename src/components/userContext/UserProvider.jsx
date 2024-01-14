import { createContext, useContext, useEffect, useState } from "react"
import { Navigate } from "react-router-dom";

const userContext = createContext();
const userToggleContext = createContext();

export const useUsercontext = () => {
  return useContext(userContext);
}

export const useTogglecontext = () => {
  return useContext(userToggleContext);
}

const UserProvider = ({ children }) => {

  
  const [user, setUser] = useState(null);

  const logAnUser = (user) => {
    setUser(user);
  }

  const logOutAnUser = () => {
    setUser(null);
  }

    useEffect(() => {

      if(!!localStorage.getItem('token') && localStorage.getItem('token') != "undefined"){
        fetch("/api/uncryptToken", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token: localStorage.getItem('token') })
        })
        .then((response) => response.json())
        .then((data) => {
          setUser(data.username)
        })
        .catch((err) => console.log(err))
      }
    }, [])
  


  
  return (
    <userContext.Provider value={user}>
      <userToggleContext.Provider value={{logAnUser, logOutAnUser}}>
        { children }
      </userToggleContext.Provider>
      
    </userContext.Provider>
  )
}

export default UserProvider