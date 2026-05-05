import axios from 'axios';
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated]= useState(false);
    const [loading,setLoading ]= useState(true);
    const [username,setUsername]=useState("")
    useEffect(()=>{
        const verify=async()=>{
            const token= localStorage.getItem('token');
            if(!token){
                setLoading(false);
                return;
            };
            try{
                const res= await axios.get("http://localhost:3000/api/v1/user/me",{
                    headers:{
                        Authorization: 'Bearer '+token,
                    }
                })
                if(res.status===200){
                    setUsername(res.data.username);
                    setIsAuthenticated(true);
                }else{
                    localStorage.removeItem("token");
                }
            }catch(err){
                localStorage.removeItem("token");
            }
            setLoading(false);
        };
        verify();
    },[]);
    const login=(u)=>{
        setIsAuthenticated(true);
        setUsername(u);
    };
    return (
        <AuthContext.Provider value={{isAuthenticated,loading, username ,login}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth=()=>useContext(AuthContext);