"use client";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";


const Aside = () => {

  var {user} = useContext(AuthContext)

  var pathname = usePathname();
  var alteredPath = pathname


  // ASIDE LINKS ADDED
  var [navLinks,setNavLinks] = useState([])
  
  useEffect(()=>{

    var links = []

    if(user?.isAdmin || user?.rights?.find(v=>v.resource == "employees")){
      links.push({ href: "/employees", lable: "Employees", icon: "bx bx-group" })
    }
    
    if(user?.isAdmin || user?.rights?.find(v=>v.resource == "meatings")){
      links.push({ href: "/meatings", lable: "Meetings", icon: "bx bx-time-five" })
    }
    // if(user?.isAdmin || user?.rights?.find(v=>v.resource == "events")){
    //   links.push({ href: "/events", lable: "Events", icon: "bx bx-time-five" })
    // }
    
    // if(user?.isAdmin || user?.rights?.find(v=>v.resource == "applicationsre")){
    //   links.push({ href: "/application-receiver", lable: "Recieve Application", icon: "bx bxs-edit-alt" })
    // }
    // if(user?.isAdmin || user?.rights?.find(v=>v.resource == "chats")){
    // links.push({ href: "/chats", lable: "Chat Group", icon: "bx bx-message-rounded-dots" })

    // }
    // if(user?.isAdmin || user?.rights?.find(v=>v.resource == "documents")){
    //   links.push({ href: "/documents", lable: "Upload documnets", icon: "bx bxs-file-doc" })
  
    //   }
    links.push({ href: "/salary", lable: "Salary", icon: "bx bxs-file-doc" })

 
    setNavLinks(links)
  },[user])


  return (
    <aside className={``}>
      <div className="flex flex-col relative">
        <div className="flex flex-1 flex-col justify-between h-full">
          <ul className="text-sm">
            <li>
              <Link
                href="/home"
                className={`relative py-2 px-4 flex items-center rounded-r-full hover:bg-white/5 group cursor-pointer ${
                  pathname=="/home" ? "group cursor-pointer bg-white/10" : ""
                }`}
              >
                <i
                  className={`bx bxs-dashboard text-xl ${
                    pathname=="/home" ? "text-white" : "text-white"
                  }`}
                ></i>
                <div
                  className={`ml-3 ${
                    pathname=="/home" ? "text-white font-semibold" : "text-white"
                  }`}
                >Dashboard</div>
              </Link>
            </li>

            {navLinks.map((v, i) => {
              return (
                <li key={i}>
                  <Link
                    href={v.href}
                    className={`relative py-2 px-4 flex items-center rounded-r-full hover:bg-white/5 group cursor-pointer ${
                      pathname.startsWith(v.href)
                        ? "group cursor-pointer bg-white/10"
                        : ""
                    }`}
                  >
                    <i
                      className={`${v.icon} text-xl ${
                        pathname.startsWith(v.href) ? "text-white" : "text-white"
                      }`}
                    ></i>
                    <div
                      className={`ml-3 ${
                        pathname.startsWith(v.href)
                          ? "text-white font-semibold"
                          : "text-white"
                      }`}
                    >
                      {v.lable}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
