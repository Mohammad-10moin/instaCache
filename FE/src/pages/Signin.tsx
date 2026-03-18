import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { Backend_Url } from "../config";
import { useNavigate } from "react-router-dom";

export function Signin(){
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function signin(){
        const username=usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const res= await axios.post(`${Backend_Url}/signin`,{
            username,
            password
        })
        const token = res.data.token;
        localStorage.setItem("token",token);
        navigate("/home");
    }
    return <div className="h-screen w-screen flex justify-center items-center bg-brainly-grey">
        <div className="bg-white p-8 rounded-2xl ">
            <Input reference={usernameRef} placeholder="username"/>
            <Input reference={passwordRef} placeholder="password"/>
            <div className="flex justify-center items-center p-2  ">
                <Button onClick={signin} variant="primary" text="Signin" fullwidth={true} loading={false}/>
            </div>
        </div>

    </div>
}