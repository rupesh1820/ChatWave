import { IoChatbubbleEllipses } from "react-icons/io5";
import { BiHeartCircle } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import ai from "../assets/AiModel.png";

const OptionMenu = () => {
  return (
    <div className="hidden  md:block w-18 bg-[#3a4c58]  text-white">
      <div className="flex flex-col h-screen p-5">
      {/* Top Menu */}
      <div className="space-y-6">
        <div className="flex flex-col items-center">
          <IoChatbubbleEllipses className="text-3xl" />
          <label htmlFor="Chat" className="text-sm">Chat</label>
        </div>
        <div className="flex flex-col items-center">
          <BiHeartCircle className="text-3xl" />
          <label htmlFor="Status" className="text-sm">Status</label>
        </div>
        <div className="flex flex-col items-center">
          <HiUserGroup className="text-3xl" />
          <label htmlFor="Group" className="text-sm">Group</label>
        </div>
      </div>
     <hr className="mt-2" />
      {/* CW Ai Section */}
      <div className="mt-6 -ml-2 w-12 flex flex-col items-center">
        <img src={ai} alt="CW Ai" className="w-15 " />
        <p className="text-xs mt-2">CW Ai</p>
      </div>

      {/* Bottom Menu */}
      <div className="mt-auto space-y-2">
        <div className="flex flex-col items-center">
          <IoMdSettings className="text-3xl" />
          <label htmlFor="Setting" className="text-sm">Setting</label>
        </div>
        <div className="flex flex-col items-center">
          <IoIosContact className="text-3xl" />
          <label htmlFor="Profile" className="text-sm">Profile</label>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default OptionMenu;