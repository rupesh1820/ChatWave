import { LuMessageSquarePlus } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import {Users} from "../Utils/User.js"
const ChatWave = () => {
  
  return (
    <div className=" mx-5 min-h-screen w-[400px] sm:w-[765px] md:w-115 px-4 py-3 ">
      <div className="flex items-center justify-between">
        {/* Left Side: Title */}
        <h1 className="text-2xl font-semibold text-white ">ChatWave</h1>

        {/* Right Side: Icons */}
        <div className="flex items-center space-x-4 text-white ml-20 lg:ml-35">
          <LuMessageSquarePlus className="text-2xl cursor-pointer hover:text-gray-300 transition" />
          <BsThreeDotsVertical className="text-2xl cursor-pointer hover:text-gray-300 transition" />
        </div>
      </div>
       <div className="relative w-full mt-5 rounded-full">
      {/* Search Icon */}
      <FaSearch className="absolute left-3 top-3 text-white text-sm" />

      {/* Input Field */}
      <input
        type="text"
        placeholder="Search or start a new chat"
        className="bg-[#6e8a9d] text-white placeholder-white pl-10 pr-4 py-2 rounded w-full focus:outline-none"
      />
    </div>
      <div className="flex justify-around mt-3 text-sm">
      <button className="bg-green-600 text-white px-4 py-1 rounded-full">All</button>
      <button className="bg-[#3a4c58] text-white px-4 py-1 rounded-full hover:bg-green-700">Unread</button>
      <button className="bg-[#3a4c58] text-white px-4 py-1 rounded-full hover:bg-green-700">Favourites</button>
      <button className="bg-[#3a4c58] text-white px-4 py-1 rounded-full hover:bg-green-700">Groups</button>
    </div>
    {/* {chat list here} */}
      {Users.map(user =>(
        <div className="flex items-center justify-between  border-b border-gray-300 p-4 cursor-pointer">

  <img className="w-12 h-12 rounded-full" src={user.Profile} alt="Profile" />

  
  <div className="flex-1 ml-4">
    <p className="text-white font-semibold">{user.name}</p>
    <p className="text-gray-400">{user.Message}</p>
  </div>

  
  <span className="text-sm text-gray-400">12:00 pm</span>
</div>
      ))}
    </div>
  );
};

export default ChatWave;