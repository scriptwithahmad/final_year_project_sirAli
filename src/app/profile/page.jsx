"use client";
import React, { useContext, useState } from "react";
import { AuthContext } from "@/src/context/AuthContext";
import Link from "next/link";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      {/* PROFILE PAGE HERE */}
      <div className=" relative max-w-4xl p-4 m-auto mt-8 py-6 bg-[#fefefee1] shade rounded-lg">
       <div className="flex justify-end">
       <Link
          href="/profile/edit"
          className="cursor-pointer mr-2 border rounded-md text-gray-600 bg-gray-100  border-gray-200 hover:text-blue-600 hover:bg-gray-50 gap-1 text-sm flex items-center px-3 py-1 transition-all duration-1000"
        >
          <ion-icon name="create-outline"></ion-icon>
          Edit
        </Link>
        <Link
          href="/profile/update-password"
          className="cursor-pointer border rounded-md text-gray-600 bg-gray-100  border-gray-200 hover:text-blue-600 hover:bg-gray-50 gap-1 text-sm flex items-center px-3 py-1 transition-all duration-1000"
        >
          <ion-icon name="create-outline"></ion-icon>
          Change Password
        </Link>
       </div>

        <div className="shade rounded-lg py-10 flex items-center flex-col justify-center">
          <div>
            <img
              src={user?.photo || "/images/newUser.png"}
              alt="image here"
              className="w-28 h-28 rounded-full shadow-md object-cover border border-gray-200 max-w-full m-auto"
            />

            <div className="flex items-center justify-center flex-col mt-6">
              <h1 className="capitalize text-3xl mb-3 text-slate-800 font-bold">
                {user?.fullName}
              </h1>
              <h2 className="text-[#6c757d] text-xs">{user?.designation}</h2>
            </div>

            <div className="grid grid-cols-2 mt-6 gap-4">
              <div className="px-4 py-2 bg-white flex items-center gap-2 border rounded-lg shadow-md">
                <div>
                  <p className="text-sm mb-1 text-gray-500">Username</p>
                  <span className="">{user?.username}</span>
                </div>
              </div>
              <div className="px-4 py-2 bg-white flex items-center gap-4 border rounded-lg shadow-md">
                <div>
                  <p className="text-sm mb-1 text-gray-500">Email</p>
                  <span className="">
                    {user?.email?.value || "example@test.com"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
