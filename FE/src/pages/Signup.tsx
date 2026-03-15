import { Button } from "../components/Button";
import { Input } from "../components/Input";
// const str:string="min-w-64 min-h-64 rounded-xl flex-col justify-center items-center";
export function Signup(){
    return <div className="h-screen w-screen flex justify-center items-center bg-brainly-grey">
        <div className="bg-white p-8 rounded-2xl ">
            <Input placeholder="username"/>
            <Input placeholder="password"/>
            <div className="flex justify-center items-center p-2  ">
                <Button variant="primary" text="Signup" fullwidth={true} loading={false}/>
            </div>
        </div>

    </div>
}