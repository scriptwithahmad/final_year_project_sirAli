"use client"
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';


const Allchats = ({data}) => {
  var { user,chats } = useContext(AuthContext);



  return (
    <div className="w-full h-[90%] border-r border-gray-300 overflow-y-scroll">
    {/* Render list of chats */}
    {chats?.data.map((chat, i) => (
          <div
            key={i}
            className={`flex ${
              user?._id === chat?.users?._id ? "justify-end" : "justify-start"
            } items-center px-4 py-2`}
          >
            {
                user?._id !== chat?.users?._id &&   <div >
                <img src={chat?.users?.photo} className=" h-6 w-6 rounded-full" alt="" />
              </div>
            }
          
            <div
              className={`max-w-xs mx-2 p-2 rounded-lg ${
                user?._id === chat?.users?._id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              <div className="font-semibold">{chat?.users?.fullName}</div>
              <div className="text-sm text-gray-600">{chat.message}</div>
          
            </div>
          </div>
        ))}
  </div>
  )
}

export default Allchats