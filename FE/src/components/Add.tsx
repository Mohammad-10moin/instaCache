import { CrossIcon } from "../icons/crossicon"
import { Input } from "./Input"
import { Button } from "./Button"
export function CreateContent({open,onclose}:{open:boolean,onclose:()=>void}){
    return <div>
        {open && <div className="w-screen h-screen bg-slate-500 opacity-60 top-0 left-0 fixed flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="bg-white opacity-100 p-4 rounded">
                    <div className=" flex justify-end cursor-pointer" onClick={onclose}>
                        <CrossIcon/>
                    </div>
                    <Input placeholder="title"/>
                    <Input placeholder="link"/>
                    <div className="flex justify-center">
                        <Button variant="primary" text="submit"/>
                    </div>
                </div>
            </div>
        </div>}
    </div>
}