"use client";
import { AuthContext } from "@/src/context/AuthContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const Page = () => {
  var { user } = useContext(AuthContext);

  const router = useRouter();
  const [formData, setFormData] = useState({
    newPassword: "",
    currentPassword: "",
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const userId = user._id;
      // console.log(userId)

      const res = await axios.put(`/api/auth/update-password`, {
        userId,
        currentPassword: formData.currentPassword,
        newPassword: formData.newPassword,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        router.push("/home");
      }
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <>
      <Toaster />
      <form
        onSubmit={submitForm}
        className="bg-[#fefefee1] shade rounded-lg px-6 py-8 max-w-3xl mx-auto my-6"
      >
        <span className="text-slate-700 font-semibold text-xl">
          Update Password
        </span>
        <div className="flex items-center mt-8 gap-6">
          <div className="grid gap-4 grid-cols-1 w-full">
            {/* Current Password */}
            <div className="flex flex-col">
              <label
                className="text-[#333441d8] text-sm mb-1"
                htmlFor="cur-pass"
              >
                Current Password
              </label>
              <input
                type="password"
                id="cur-pass"
                name="currentPassword"
                onChange={changeHandler}
                value={formData.currentPassword}
                placeholder="Current Password"
                className="rounded-lg py-2 border text-[#555] focus:text-[#1553A1] border-gray-300 focus:border-[#1554a177]"
              />
            </div>
            {/* New Password */}
            <div className="flex flex-col">
              <label
                className="text-[#333441d8] text-sm mb-1"
                htmlFor="new-pass"
              >
                New Password
              </label>
              <input
                id="new-pass"
                type="password"
                name="newPassword"
                onChange={changeHandler}
                value={formData.newPassword}
                placeholder="New Password"
                className="rounded-lg py-2 border text-[#555] focus:text-[#1553A1] border-gray-300 focus:border-[#1554a177]"
              />
            </div>
          </div>
        </div>
        {/* BUTTON HERE  */}
        <button
          type="submit"
          className="mt-6 border border-slate-400 text-slate-400 font-light hover:border-slate-500 hover:text-slate-500 flex items-center gap-2 px-5 py-2 rounded-full transition duration-300 cursor-pointer"
        >
          <i className="bx bx-save"></i>
          Update Password
        </button>
      </form>
    </>
  );
};

export default Page;
