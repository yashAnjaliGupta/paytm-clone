import { useCallback, useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth"

export const Signup=()=>{
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    /*memo comapre strings, nums,bool directly but every time 
    onchange function refrence changes so usecall is used to 
    memoize the change function so that memo can work
    memo only prevents re-render when props are the same by reference. In your Signup.jsx, each render creates new inline functions for onChange
    */
    const {login} = useAuth();
    
    const handleFirstNameChange=useCallback(e=>setFirstName(e.target.value),[]);
    const handleLastNameChange=useCallback(e=>setLastName(e.target.value),[]);
    const handleUsernameChange=useCallback(e=>setUsername(e.target.value),[]);
    const handlePasswordChange=useCallback(e=>setPassword(e.target.value),[]);
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className = "rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign Up"}/>
                <SubHeading label={"Enter your information to create an account"}/>
                <InputBox onChange={handleFirstNameChange}
                placeholder="John" label={"First Name"}/>
                <InputBox onChange={handleLastNameChange}
                placeholder="Doe" label={"Last Name"}/>
                <InputBox onChange={handleUsernameChange}
                placeholder="Johndoe@gmail.com" label={"Email"}/>
                <InputBox onChange={handlePasswordChange}
                placeholder="********" label={"Password"}/>
                <div className="pt-4">
                    <Button label={"Signup"} onClick={async ()=>{
                        const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                            username,
                            firstName,
                            lastName,
                            password
                        })
                        localStorage.setItem("token",response.data.token)
                        login(username)
                    }}/>
                </div>
                <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}/>
            </div>
        </div>
    </div>
}