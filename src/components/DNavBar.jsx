"use client";

import Link from "next/link";
import React, { useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AuthContext } from "../context/AuthContext";

const DNavBar = () => {
  var { user } = useContext(AuthContext);
  const [showModel, setShowModel] = useState(false);

  const handleLogout = async () => {
    try {
      const confirmLogout = window.confirm("Are you sure you want to logout?");
      if (!confirmLogout) return;
      const res = await axios.post("/api/auth/logout");
      if (res.data.success) {
        window.location.reload();
      }
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between px-4 py-0">
        <div className="flex items-center gap-4">
          <i
            onClick={() => alert("Roko Zara Sabar Karo!")}
            className="bx bx-menu text-3xl text-[#555] cursor-pointer"
          ></i>
          <div className="flex items-center">
            <Link href="/" className="flex-none">
              <img
                src="/images/dlogo.png"
                width={55}
                className="mx-auto w-10"
              />
            </Link>
          </div>
        </div>

        <div className="flex py-4 group relative items-center gap-2">

          {
            user?.photo ?
          <img
            onClick={() => setShowModel(!showModel)}
            src={user?.photo}
            alt="image here"
            className="rounded-full h-9 w-9 object-cover cursor-pointer"
          />
          :
          <div
            onClick={() => setShowModel(!showModel)}
            className="rounded-full flex justify-center items-center font-black text-xl bg-blue-600 text-white h-9 w-9 object-cover cursor-pointer"
          >{user?.fullName[0]}</div>
        }


          <div className="leading-3 pr-1">
            <p className="text-[14px] mb-1 text-white capitalize font-medium">
              {user?.fullName}
            </p>
            <span className="text-[11px] cursor-pointer text-gray-400">
              {user?.isAdmin == true ? "Admin" : "User"}
            </span>
          </div>

          {/* Profile Model Here */}
          <div
            className={`shade pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 opacity-0 group-hover:top-[95%] transition-all duration-500 bg-white absolute shadow-md right-0 top-[130%] overflow-hidden rounded-md h-fit min-w-[100px] z-[1000000]`}
          >
            <ul className="px-4 py-4">
              <li className="flex flex-col gap-2">
                <Link
                  className="text-xs text-gray-600 hover:text-blue-600 flex items-center gap-2"
                  href="/profile"
                >
                  <i className="bx bx-user"></i> Profile
                </Link>
                <button
                  className="text-xs text-gray-600 hover:text-blue-600 flex items-center gap-2"
                  onClick={handleLogout}
                >
                  <i className="bx bx-log-out"></i> Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DNavBar;
