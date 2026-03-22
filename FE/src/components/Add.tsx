import { CrossIcon } from "../icons/crossicon"
import { Input } from "./Input"
import { Button } from "./Button"
import { useRef, useState } from "react"
import { Backend_Url } from "../config";
import axios from "axios";
import { Dropdown } from "./Dropdown";

export function CreateContent({open,onclose}:{open:boolean,onclose:()=>void}){

    const titleref = useRef<HTMLInputElement>(null);
    const linkref = useRef<HTMLInputElement>(null);
    const [type,setType] = useState("");

    async function addcontent(){
        const title = titleref.current?.value;
        const link = linkref.current?.value;
        const added = await axios.post(`${Backend_Url}/addContent`,{
            title,
            type,
            link
        },{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        })
        if(added){
            alert("content added")
        }
    }
    return <div>
        {open && <div>
                <div className="w-screen h-screen bg-slate-500 opacity-60 top-0 left-0 fixed flex justify-center">
                </div>
                <div className="w-screen h-screen  top-0 left-0 fixed flex justify-center">
                <div className="flex flex-col justify-center">
                    <div className="bg-white opacity-100 p-4 rounded">
                        <div className=" flex justify-end cursor-pointer" onClick={onclose}>
                            <CrossIcon/>
                        </div>
                        <Input reference={titleref} placeholder="title"/>
                        <Input reference={linkref} placeholder="link"/>
                        <Dropdown
                                fullwidth={false}
                                options={[
                                { label: "youtube", value: "youtube" },
                                { label: "twitter", value: "twitter" }
                                ]}
                                onSelect={(value) => setType(value)}
                        />
                        <div className="flex justify-center">
                            <Button onClick={addcontent} variant="primary" text="submit"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         }
    </div>
}