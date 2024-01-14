import { Navigate } from "react-router-dom";
import { useUsercontext } from "./userContext/UserProvider";

export const RequireAuth = ({ children }) => {

    const user = useUsercontext();

    if(!localStorage.getItem('token')){
        return <Navigate to="/login" ></Navigate>
    }

    return children

}
