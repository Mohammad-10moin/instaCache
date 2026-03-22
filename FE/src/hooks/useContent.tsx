import axios from "axios";
import { useEffect, useState } from "react";
import { Backend_Url } from "../config";

type ContentType = {
    type: string;
    link: string;
    title: string;
};

export function useContent(){
    const [contents, setContent]= useState<any[]>([]);

    useEffect(()=>{
        axios.get(`${Backend_Url}/content`,{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        }) .then((response)=>{
            setContent(response.data|| [])
            console.log(response.data)
            // console.log(response.data.content)
        })
    },[])

    return contents;
}