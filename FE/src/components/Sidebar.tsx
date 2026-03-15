import { Logo } from "../icons/logo";
import { TwitterIcon } from "../icons/twittericon";
import { YoutubeIcon } from "../icons/youtubeicon";
import { SidebarItem } from "./SideItem";

export function Sidebar(){
    return <div className="h-screen w-72 bg-white border-gray-300 border-r-2 left-0 top-0 fixed pl-2">
        <div className="flex text-3xl pl-2 py-5 items-center font-bold">
            <div className="pr-2">
                <Logo/>
            </div>
            Brainly
        </div>
        <div className="pt-4">
            <SidebarItem text="Youtube" icon={<YoutubeIcon/>}/>
            <SidebarItem text="Twitter" icon={<TwitterIcon/>}/>
        </div>
    </div>
}