import type { ReactElement } from "react";

interface ButtonProps{
    variant:"primary"|"secondary";
    text:string;
    StartIcon?:ReactElement;
    onClick?:()=>void;
}

const variantClass={
    "primary":"bg-brainly-blue text-white",
    "secondary":"bg-brainly-lightblue text-brainly-blue"
}

const defaultStyles="px-4 py-2 rounded-md font-light flex items-center cursor-pointer";
export function Button({variant,text,StartIcon,onClick}:ButtonProps){
    return <button onClick={onClick} className= {`${variantClass[variant]} ${defaultStyles} `}>
        <div className="px-1 ">{StartIcon}</div>
        {text}</button>
}