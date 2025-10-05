import React from 'react'
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

import { BiHeartCircle } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";

const MobileMenu = () => {
  return (
    <div className='block md:hidden '>
      <div className="space-y-6 -mt-10 flex fixed  text-white  justify-around bg-transparent w-full ">
              <div className="flex-col  items-center">
                <IoChatbubbleEllipses className="text-3xl" />
                <label htmlFor="Chat" className="text-sm">Chat</label>
              </div>
              <div className="flex-col items-center">
                <BiHeartCircle className="text-3xl" />
                <label htmlFor="Status" className="text-sm">Status</label>
              </div>
              <div className=" flex-col items-center">
                <HiUserGroup className="text-3xl" />
                <label htmlFor="Group" className="text-sm">Group</label>
              </div>
              <div className=" flex-col items-center">
                <IoCall className="text-3xl" />
                <label htmlFor="Group" className="text-sm">Calls</label>
              </div>
               
            </div>
    </div>
  )
}

export default MobileMenu
