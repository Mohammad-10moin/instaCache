import type { ReactElement } from "react";

interface ButtonProps{
    variant:"primary"|"secondary";
    text:string;
    StartIcon?:ReactElement;
    onClick?:()=>void;
    fullwidth?:boolean;
    loading?:boolean;
}

const variantClass={
    "primary":"bg-brainly-blue text-white",
    "secondary":"bg-brainly-lightblue text-brainly-blue"
}

const defaultStyles="px-4 py-2 rounded-md font-light flex items-center  border";
export function Button({variant,text,StartIcon,onClick,fullwidth,loading}:ButtonProps){
    return <button onClick={onClick} disabled={loading} className= {`${variantClass[variant]} ${defaultStyles} ${fullwidth? "w-full flex justify-center items-center":""} ${loading? "opacity-50 cursor-not-allowed":"cursor-pointer"}`}>
        <div className="px-1 ">{StartIcon}</div>
        {loading? "loading..": text}</button>
}