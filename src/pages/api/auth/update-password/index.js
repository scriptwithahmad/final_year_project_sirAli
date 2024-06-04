import dbConnect from "@/src/config/dbConnect";
import EmployeesModel from "@/src/models/employees";

import bcrypt from "bcrypt";

export default async function handler(req, res) {
  dbConnect();

  switch (req.method) {
    case "PUT":
      try {
        const { userId, currentPassword, newPassword } = req.body;

        // Validate incoming data
        if (!userId || !currentPassword || !newPassword) {
          return res.status(400).json({
            success: false,
            message: "Provide all necessary fields!",
          });
        }

        // Find user by ID
        const foundUser = await EmployeesModel.findById(userId);

        if (!foundUser) {
          return res.status(404).json({
            success: false,
            message: "User not found",
          });
        }

        // Compare password
        const isMatch = await bcrypt.compare(
          currentPassword,
          foundUser.password
        );

        if (!isMatch) {
          return res.status(400).json({
            success: false,
            message: "Current password is incorrect",
          });
        }

        // Hash and update the new password
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        foundUser.password = hashedNewPassword;
        await foundUser.save();

        return res.status(200).json({
          success: true,
          message: "Password updated successfully",
        });
      } catch (error) {
        console.error(error);
        return res.status(500).json({
          success: false,
          message: "Internal Server Error" || error.message,
        });
      }

    default:
      return res.status(405).json({
        success: false,
        message: "Method not Allowed!",
      });
  }
}
