"use client";
import React, { useContext, useState } from "react";
import { AuthContext } from "@/src/context/AuthContext";
import axios from "axios";
import { toast } from "react-hot-toast";

const ChatInput = () => {
  var { user,refetchChats } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    users: user?._id,
    message: "",
  });
  const changehandler = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  const submiteHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/chats", {
        ...formData,
        users: user?._id,
      });
      if (res.data.success) {
        toast.success("Message sent SucessFully")
        refetchChats()
      }
     setFormData({message:""})
    } catch (error) {
      console.log(error);
      toast.error("Message not send")
     setFormData({message:""})

    }
  };

  return (
    <>
    
      <div className="flex-1 flex flex-col">
        {/* Render chat messages here */}
        <form onSubmit={submiteHandler} className="message-input mt-auto flex">
          <input
            type="text"
            onChange={changehandler}
            name="message"
            value={formData.message}
            placeholder="Type a message..."
            className="border border-gray-300 rounded-l px-4 py-2 w-full"
          />
          <button className="bg-green-500 text-white px-4 py-2 rounded-r">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default ChatInput;
