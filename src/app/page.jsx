import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <>
      <div class="min-h-screen flex relative overflow-hidden bg-gradient-to-tr from-white to-blue-200 justify-center p-4 items-center">


        <header className="max-w-[1200px] relative text-center m-auto grid place-content-center h-[40vh]">
          <div className=" flex flex-col items-center">

            <img src="/images/elogo.webp" className="w-10 mb-4" alt="" />

            <h3 className=" text-sm mb-4 text-slate-600">
              Admin Dashboard
            </h3>
            <h1 class="text-slate-800 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight">
              Welcome to Eworkspace 
            </h1>
            <div className="mt-8 flex gap-4">
             
              {/* <a target="_blank" href="http://edifycit.com">
                <button className="px-5 py-2 rounded-md bg-white border border-slate-400 font-light text-slate-500 hover:text-slate-700 hover:border-slate-500 transition-all duration-150">
                  <i className="bx bx-globe"></i> Go to Website 
                </button>
              </a> */}

             

              <Link href={"/login"}>
                <button className="bg-[#1552A2] px-5 py-2 rounded-md text-white hover:bg-[#1552a2e8] transition-all duration-150">
                <i class='bx bxs-user'></i> Sign in
                </button>
              </Link>
            </div>
          </div>



          <div style={{animationDuration:"20s"}} className="absolute animate-spin top-0 left-0 grid grid-cols-6 gap-1">
          {
            Array.from(Array(36).keys()).map(v=><div key={v} className="w-2 rounded-full h-2 bg-blue-800/20"></div>)
          }
        </div>

        <div style={{animationDuration:"20s"}} className="absolute bottom-0 right-0 grid animate-spin grid-cols-6 gap-1">
          {
            Array.from(Array(36).keys()).map(v=><div key={v} className="w-2 h-2 rounded-full bg-blue-800/20"></div>)
          }
        </div>

        </header>


      </div>
    </>
  );
};

export default index;