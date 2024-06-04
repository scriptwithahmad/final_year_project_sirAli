import { NextResponse } from "next/server";
import { JWTVerify } from "./helpers/jwt";
import { publicRoutes } from "@/data";

export async function middleware(req, res) {
  var pathname = req.nextUrl.pathname;
  var token = req.cookies.get("AccessToken")?.value;
  var userID = token && (await JWTVerify(token));

  if (!userID && !publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (userID && publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/home", req.nextUrl));
  }

  var user = await fetch(`http://localhost:3000/api/auth/profile?id=${userID}`);
  user = await user.json();
  user = user.message;

  if (user) {
    if (!user.email?.isVarified && pathname != "/email-verify") {
      return NextResponse.redirect(new URL("/email-verify", req.nextUrl));
    }
    if (user.email?.isVarified && pathname == "/email-verify") {
      return NextResponse.redirect(new URL("/home", req.nextUrl));
    }

    if (!user.isAdmin) {
      // employees Access
      var isEmployeesAccessble = user.rights?.find(
        (v) => v.resource == "employees"
      );
      if (pathname.startsWith("/employees") && !isEmployeesAccessble) {
        return NextResponse.redirect(new URL("/home", req.nextUrl));
      }
  // Meatings Access
  var isMeatingsAccessble = user.rights?.find(
    (v) => v.resource == "meatings"
  );
  if (pathname.startsWith("/meatings") && !isMeatingsAccessble) {
    return NextResponse.redirect(new URL("/home", req.nextUrl));
  }
      
     
    }
  }
}

export const config = {
  matcher: [
    "/",
    "/login",

    "/application-receiver",
    "/applications",
    "/documents",
    "/home",
    "/email-verify",

    "/attendance",
    "/attendance/:path*",

    "/chats",
    "/chats/:path*",
    "/employees",
    "/employees/:path*",
    "/meatings",
    "/meatings/:path*",
    "/events",
    "/events/:path*",
    "/users",
    "/users/:path*",

    "/profile",
  ],
};
