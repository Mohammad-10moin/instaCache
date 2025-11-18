import type { ReactElement } from "react"



interface ButtonProps{
    variant:"primary"|"secondary",
    size:"sm"|"md"|"lg",
    text:string,
    starticon?:ReactElement,
    endicon?:ReactElement,
    onClick?: ()=>void
    
}

const variantStyles = {
    "primary" : "bg-purple-600 text-purple-400",
    "secondary": "bg-purple-400 text-purple-500"
}

const defaultStyles = "rounded-md ";

const sizeStyles = {
    "sm" : "px-2 py-1",
    "md" : "px-4 py-2",
    "lg" : "px-6 py-4"
}

export const Button = (props:ButtonProps)=>{
    return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>{props.text}</button>
}