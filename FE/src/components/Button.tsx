import type { ReactElement } from "react";

interface ButtonProps{
    variant:"primary"|"secondary",
    text:string,
    StartIcon:ReactElement
}

const variantClass={
    "primary":"bg-brainly-blue text-white",
    "secondary":"bg-brainly-lightblue text-brainly-blue"
}

const defaultStyles="px-4 py-2 rounded-md font-light flex items-center";
export function Button(props:ButtonProps){
    return <button className= {`${variantClass[props.variant]} ${defaultStyles} `}>
        <div className="px-1">{props.StartIcon}</div>
        {props.text}</button>
}