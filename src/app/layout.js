"use client";
import "./globals.css";
import Aside from "../components/Aside";
import DNavBar from "../components/DNavBar";
import { usePathname, useRouter,useSearchParams, } from "next/navigation";
import {Toaster} from 'react-hot-toast'
import Context from "../context/AuthContext";
import {QueryClientProvider,QueryClient} from 'react-query'
import 'boxicons/css/boxicons.min.css';
const queryClient = new QueryClient();
import { publicRoutes } from "@/data";



export default function RootLayout({children}) {
  var {back} = useRouter();
  var pathname = usePathname();
  var params = useSearchParams()

  function setTitleOfPage(){
    if(pathname == "/home"){
      return "Dashboad"
    }else if(pathname.startsWith("/users")){
      return "Users"
    }else if(pathname.startsWith("/employees")){
      return "Employees"
    }else if(pathname.startsWith("/attendance")){
      return "Attendance"
    }else if(pathname.startsWith("/blogs")){
      return "Blogs"
    }else if(pathname.startsWith("/certificates")){
      return "Certificates"
    }else if(pathname.startsWith("/courses")){
      return "Courses"
    }else if(pathname.startsWith("/programs")){
      return "Programs"
    }else if(pathname.startsWith("/enquiries")){
      return "Enquiries"
    }
  }
  

  return (
    <html lang="en">
      <head>

      </head>

      <body>
        <QueryClientProvider client={queryClient}>
          <Context>
            <Toaster position="top-center" />

            {
              (publicRoutes.includes(pathname) || (pathname == "/email-verify")) ?
              children
              :
              // <div className="bg-no-repeat bg-cover bg-center bg-[url('https://img.freepik.com/free-photo/lights-night-city_23-2148139065.jpg?w=1060&t=st=1702806792~exp=1702807392~hmac=381abf771ea0ce81444a09346a1a6304b334a490f0bcd4c864dbc4d7d68f6372')] h-screen">
              // <div className="bg-no-repeat bg-cover bg-center bg-[url('https://img.freepik.com/free-photo/abstract-digital-grid-black-background_53876-97647.jpg?w=900&t=st=1702807124~exp=1702807724~hmac=7bbf00d27dcfa638c610192c153e53ec8f2435f20ad3cdd5ea67f5eb1c989dbb')] h-screen">
              // <div className="bg-no-repeat bg-cover bg-center bg-[url('https://img.freepik.com/free-vector/digital-red-circuit-lines-technology-background-design_1017-27263.jpg?w=1380&t=st=1702807120~exp=1702807720~hmac=6b5ac501d950673a307cfe4f78aa166622e265c32e8f8074ed23310a8f7b6fbe')] h-screen">
              <div className="bg-no-repeat bg-cover bg-center bg-[url('https://img.freepik.com/free-photo/3d-render-futuristic-modern-network-communications-design_1048-12969.jpg?w=826&t=st=1702807375~exp=1702807975~hmac=866398f8f3c53c15a85d01c6a13ab8b6821c750e27c1514c0d2bb8e2b0123cb1')] h-screen">
                
                
                <div className="w-full h-[70px]">
                  <DNavBar />
                </div>


                <div className="flex h-[calc(100vh_-_70px)] border-red-500 pb-4 pr-4">
                  <div className="w-[220px] pr-4 mt-4">
                    <Aside />
                  </div>
                  <div className="h-full overflow-hidden flex flex-col flex-1 bg-white/90 rounded-lg ">
                    
                    <div className="py-3 flex items-center px-4 bg-white border-red-700">
                        <i onClick={() => back()} className="bx cursor-pointer flex mr-3 justify-center  items-center rounded-md text-gray-500  hover:bg-gray-300 hover:text-black text-2xl bx-left-arrow-alt"></i>
                        <h2 className="text-xl font-semibold">{setTitleOfPage()}</h2>
                    </div>

                    <div className="flex-1 p-4 overflow-auto border-blue-600">{children}</div>

                  </div>
                </div>


              </div>
            }

          </Context>
        </QueryClientProvider>
      </body>
    </html>
  );
}
