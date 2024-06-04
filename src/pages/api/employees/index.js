import dbConnect from "@/src/config/dbConnect";
import EmployeesModel from "@/src/models/employees";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  dbConnect();
  switch (req.method) {
    case "GET":
      try {
        var match = {};

        const page = req.query.page || 1;
        const limit = req.query.limit || 6;
        const skip = (page - 1) * limit;

        if (req.query.keyword) {
          match.$or = [
            { fullName: new RegExp(req.query.keyword, "i") },
            { department: new RegExp(req.query.keyword, "i") },
          ];
        }
        if (req.query.meatingUsers) {
          const employees = await EmployeesModel.find(match, {
            fullName: 1,
            employeeID: 1,
            updatedAt: 1,
          });
          res.status(200).json({
            success: true,
            message: {
              data: employees,
            },
          });
          return;
        }

        const employees = await EmployeesModel.find(match)
          .limit(limit)
          .skip(skip);
        const total = await EmployeesModel.find(match).count();

        var starting = total ? skip + 1 : 0;
        var ending =
          starting + limit - 1 > total ? total : starting + limit - 1;

        res.status(200).json({
          success: true,
          message: {
            data: employees,
            count: total,
            starting,
            ending,
          },
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Something Went Wrong!",
        });
      }
      break;
    case "POST":
      try {
        const employee = req.body;

        var lastEnteredEmployee = await EmployeesModel.findOne().sort({
          employeeID: -1,
        });
        var lastEnteredID = lastEnteredEmployee?.employeeID || 0;
        if (!req.body.username) {
          res.status(400).json({
            success: false,
            message: "Username Required!",
          });
        }

        if (!req.body.password) {
          res.status(400).json({
            success: false,
            message: "Password Required!",
          });
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newEmployee = new EmployeesModel({
          ...employee,
          employeeID: lastEnteredID + 1,
          password: hashedPassword,
        });
        await newEmployee.save();

        res.status(201).json({
          success: true,
          message: "Employee Added Successfully!",
        });
      } catch (err) {
        // For duplicate Error
        if (err.code === 11000) {
          return res.status(409).json({
            success: false,
            message: `${Object.keys(err.keyPattern)[0]} is already in used!`,
          });
        }

        // required fields error handling
        var requiredFildName = Object.keys(err.errors)[0];
        if (requiredFildName) {
          return res.status(400).json({
            success: false,
            message: `${requiredFildName} is required!`,
          });
        }

        res.status(500).json({
          success: false,
          message: "Something Went Wrong!",
        });
      }
      break;
  }
}
