import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { Backend_Url } from "../config";
import { useNavigate } from "react-router-dom";
// const str:string="min-w-64 min-h-64 rounded-xl flex-col justify-center items-center";

export function Signup(){

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    
    async function signup(){
        const username=usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const res= await axios.post(`${Backend_Url}/signup`,{
            username,
            password
        })
        navigate("/signin");
        alert(res.data.msg);
    }
    return <div className="h-screen w-screen flex justify-center items-center bg-brainly-grey">
        <div className="bg-white p-8 rounded-2xl ">
            <Input reference={usernameRef} placeholder="username"/>
            <Input reference={passwordRef} placeholder="password"/>
            <div className="flex justify-center items-center p-2  ">
                <Button onClick={signup} variant="primary" text="Signup" fullwidth={true} loading={false}/>
            </div>
        </div>

    </div>
}