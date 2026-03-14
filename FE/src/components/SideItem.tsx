import type { ReactElement } from "react";

export function SidebarItem({text,icon}:{
    text:string;
    icon:ReactElement;
}){
    return <div className="flex items-center justify-center border rounded m-2 p-2 max-w-64 ">
        <div className="p-2">
            {icon} 
        </div>
        {text}
    </div>
}