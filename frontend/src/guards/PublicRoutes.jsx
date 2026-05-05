import { Navigate } from "react-router-dom";
import { useAuth } from "../auth";

export const PublicRoutes=({children})=>{
    const {isAuthenticated, loading}=useAuth();

    if(loading)return <div>Loading....</div>
    return isAuthenticated?<Navigate to='/dashboard'/>:children; 
}
