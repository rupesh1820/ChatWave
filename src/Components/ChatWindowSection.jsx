import React from "react";
import { MdOutlineVideocam } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa";
import { Users } from "../Utils/User";
const ChatWindowSection = () => {
  return (
    <div className=" hidden md:block bg-[#111b21] text-white md:w-[600px] lg:w-[700px] xl:w-[900px]">
      <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="flex items-center bg-[#203e4f] px-4 py-3">
        <div className="flex items-center flex-shrink-0">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="ml-3 text-lg font-semibold truncate max-w-[120px] sm:max-w-[200px]">
            Rupesh
          </span>
        </div>

        <div className="flex-1 flex justify-end items-center space-x-4 ml-4">
          <MdOutlineVideocam className="hover:text-gray-400 cursor-pointer" size={22} />
          <IoSearch className="hover:text-gray-400 cursor-pointer" size={22} />
          <BsThreeDotsVertical className="hover:text-gray-400 cursor-pointer" size={22} />
        </div>
      </div>

      {/* Chat messages area */}
      <div className="flex-1 overflow-y-auto px-4 py-2">
        {/* Messages will go here */}
      </div>

      {/* Message Input */}
      <div className="w-full bg-[#111b21] px-4 py-3 flex items-center border-t border-gray-700">
        <button className="text-xl mr-3 hover:text-gray-400">
          <FaPlus />
        </button>
        <input
          type="text"
          placeholder="Type a message"
          className="flex-1 bg-[#202c33] px-4 py-2 rounded-full outline-none placeholder:text-gray-400 text-white"
        />
        <button className="text-xl ml-3 hover:text-gray-400">
          <FaMicrophone />
        </button>
      </div>
      </div>
    </div>
  );
};

export default ChatWindowSection;
