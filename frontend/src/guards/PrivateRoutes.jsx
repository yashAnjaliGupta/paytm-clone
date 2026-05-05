import { Navigate } from "react-router-dom";
import { useAuth } from "../auth";

export const PrivateRoutes=({children})=>{
    const {isAuthenticated, loading}=useAuth();

    if(loading)return <div>Loading....</div>
    return isAuthenticated?children:<Navigate to='/signin'/> 
}
