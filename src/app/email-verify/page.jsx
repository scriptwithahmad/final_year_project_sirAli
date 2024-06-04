"use client";
import { AuthContext } from "@/src/context/AuthContext";
import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


const Page = () => {


  var { user,refetch } = useContext(AuthContext);
  var router = useRouter()

  var [mailSent, setMailSent] = useState(false);
  var [loading,setLoading] = useState(false)

  var [otpInput,setOtpInput] = useState("")

  async function sendOTP(e) {
    try {
      setLoading(true)
      var res = await axios.post("/api/auth/email-verify", user);
    } catch (error) {
      alert("Something went wrong! Please Try Again Later.")
    }finally{
      setLoading(false)
      setMailSent(true)
    }
  }

  async function verifyOTP(e) {

    if(otpInput.length != 6){
      toast.error("Please Enter 6 digits OTP!")
      return
    }
    try {
      setLoading(true)
      var res = await axios.put("/api/auth/email-verify", {user,otp:Number(otpInput)});
      if(res.data.success){
        toast.success(res.data.message)
        refetch()
        setTimeout(()=>{
          router.push("/home")
        },1000)
      }
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }finally{
      setLoading(false)
      setMailSent(true)
    }
  }



  return (
    <div>
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white">
        <div className="max-w-2xl px-5 text-center">
          <img src="/images/emailVerify2.svg" className="w-64 mx-auto" alt="" />

            <div>
              <h2 className="mb-2 text-3xl font-bold text-zinc-800">
                verify your email
              </h2>
              <p className="mb-2 text-zinc-500">
                We will dispatch a six-digit OTP (One-Time Password) code to the
                email address{" "}
                <span className="font-medium text-blue-600">
                  {user?.email?.value}
                </span>{" "}
                for your verification.
              </p>
            </div>

          {mailSent ? (
            <div className="flex justify-center otpInputs items-center">
              <input autoFocus minLength="6" maxLength="6" type="text" onChange={(e)=>setOtpInput(e.target.value)} className="border rounded-lg my-4 text-center text-3xl focus:ring-0 tracking-[10px]" />
            </div>
          ) : null}

          {mailSent ? (
            <>
            <button
              onClick={sendOTP}
              className="mt-3 inline-block px-4 rounded mx-2 text-blue-600 py-2 font-medium border border-blue-600  shadow-md shadow-indigo-500/20"
            >
              Resend OTP
            </button>
             <button
             onClick={verifyOTP}
             className="mt-3 inline-block px-4 rounded mx-2 text-white py-2 font-medium border bg-blue-600 border-blue-600  shadow-md shadow-indigo-500/20 hover:bg-blue-900"
           >
              {
                loading ? <i className='bx bx-loader-circle bx-spin bx-rotate-180 mr-1' ></i> : null
              }
             {loading ? "Please Wait..." : "Verify"}
           </button>
           </>
          ) : (
            <button
              onClick={sendOTP}
              disabled={loading}
              className="mt-3 disabled:opacity-70 disabled:cursor-not-allowed inline-block px-4 rounded bg-blue-600 py-2 font-medium border text-white border-blue-600  shadow-md shadow-indigo-500/20 hover:bg-blue-700"
            >
              {
                loading ? <i className='bx bx-loader-circle bx-spin bx-rotate-180 mr-1' ></i> : null
              }
              {loading ? "Sending" : "Send OTP"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
