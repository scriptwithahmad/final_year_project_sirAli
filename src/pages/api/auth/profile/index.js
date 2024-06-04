import dbConnect from "@/src/config/dbConnect";
import EmployeesModel from "@/src/models/employees";

import { JWTVerify } from "@/src/helpers/jwt";



export default async function handler(req, res) {
  dbConnect();

  try {

    var token = req.cookies.AccessToken || "";
    var userID = await JWTVerify(token) || req.query.id

    const foundUser = await EmployeesModel.findById(userID ,{password:false});

    if (!foundUser) {
      res.status(400).json({
        success: false,
        message: null,
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: foundUser,
    });


  } catch (error) {

    if(error.kind == "ObjectId"){
      res.status(400).json({
        success: false,
        message: null,
      });
      return;
    }



    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
