import { serialize } from "cookie";

export default async function handler(req, res) {
  try {
    res.setHeader(
      "Set-Cookie",
      serialize("AccessToken", "", {
        path: "/",
        httpOnly: true,
        secure: true,
      })
    );

    res.status(200).json({
      success: true,
      message: "User Logged Out!!!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Errror",
    });
  }
}
