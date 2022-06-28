import Image from "next/image"
import Sidebarlink from "./Sidebarlink";
import {HomeIcon} from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardIcon,
  UserIcon,
  DotsCircleHorizontalIcon
  
}
from "@heroicons/react/outline";


function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start x
    l:w-[340px] p-2 fixed first-letter h-full">
        <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
          <Image src="https://rb.gy/ogau5a" width={30} height={30} />
            

        </div>
        <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
          <Sidebarlink text="Home" Icon={HomeIcon} active/>
          <Sidebarlink text="Explore" Icon={HashtagIcon}/>
          <Sidebarlink text="Notification" Icon={BellIcon}/>
          <Sidebarlink text="Messages" Icon={InboxIcon}/>
          <Sidebarlink text="Bookmarks" Icon={BookmarkIcon}/>
          <Sidebarlink text="Lists" Icon={ClipboardIcon}/>
          <Sidebarlink text="Profile" Icon={UserIcon}/>
          <Sidebarlink text="More" Icon={DotsCircleHorizontalIcon}/>
         
            
          
        </div>
        <button className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full  w-56  h-[56px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]">Tweet</button>
        <div>
         <img src="https://lh3.googleusercontent.com/a/AATXAJwCsuneWAKKlHwMPxOmLNjFACEvbtn8QPwbUs" alt="" />
          </div>     
    </div>
  )
}

export default Sidebar