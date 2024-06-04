import dbConnect from "@/src/config/dbConnect";

import Salary from "@/src/models/salary"
export default async function handler(req, res) {
  dbConnect();

  var foundEmployee;

  try {
    foundEmployee = await Salary.findById(req.query.id);
    if (!foundEmployee) {
      res.status(404).json({
        success: false,
        message: "Salary Not Found!",
      });
      return;
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid Employee Id sent!",
    });
    return;
  }

  try {
    switch (req.method) {
      case "GET":
        res.status(200).json({
          success: true,
          message: foundEmployee,
        });
        break;
      case "PUT":
        await Salary.findByIdAndUpdate(
          req.query.id,
          { $set: req.body },
          { new: true }
        );
        res.status(201).json({
          success: true,
          message: "Salary Updated Successfully!",
        });
        break;
      case "DELETE":
        await Salary.findByIdAndDelete(req.query.id);
        res.status(201).json({
          success: true,
          message: "Salary Deleted Successfully!",
        });
        break;
      default:
        res.status(500).json({
          success: false,
          message: "Method Not Allowed!",
        });
    }
  } catch (error) {
    // For duplicate CNIC, Email and Phone Error Handling
    if (err.code === 11000 && err.keyPattern.cnic) {
      return res.status(409).json({
        success: false,
        message: "CNIC Already Exist!",
      });
    }
    if (err.code === 11000 && err.keyPattern.email) {
      return res.status(409).json({
        success: false,
        message: "Email Already Exist!",
      });
    }
    if (err.code === 11000 && err.keyPattern.phone) {
      return res.status(409).json({
        success: false,
        message: "Phone Number Already Exist!",
      });
    }

    var errorMessage = err.message?.split(":")[2]?.trim();
    if (errorMessage) {
      return res.status(400).json({
        success: false,
        message: errorMessage,
      });
    }

    res.status(500).json({
      success: false,
      message: "Something Went Wrong!",
    });
  }
}
