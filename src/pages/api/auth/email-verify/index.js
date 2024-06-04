import dbConnect from "@/src/config/dbConnect";
import EmployeesModel from "@/src/models/employees";

process.env.TZ = "Asia/Karachi";
import sendMail from "@/src/config/sendMail";
import mailjet from "@/src/helpers/mailjet";
import { OtpTemplate } from "@/data";

export default async function handler(req, res) {
  dbConnect();

  switch (req.method) {
    case "POST":
      try {
        const { fullName, email, _id } = req.body;

        var otp = {
          value: Math.floor(100000 + Math.random() * 900000),
          expirationTime: new Date().getTime() + 60000,
        };

        await mailjet(
          email.value,
          fullName,
          "Verify Your Email - Edifycit",
          OtpTemplate(otp.value)
        );

        var r = await EmployeesModel.findByIdAndUpdate(
          _id,
          { $set: { otp } },
          { new: true }
        );

        res.json({
          success: true,
          message: "Check your Email!",
        });
      } catch (error) {
        console.error(error);
        return res.status(500).json({
          success: false,
          message: "Something went wrong with the update!",
          error: error.message,
        });
      }
      break;
    case "PUT":
      try {
        const { user, otp } = req.body;

        var foundUser = await EmployeesModel.findById(user._id);

        if (!(foundUser?.otp?.value == otp)) {
          res.status(403);
          res.json({
            success: false,
            message: "Invalid OTP",
          });
          return;
        }

        var updatedUser = await EmployeesModel.findByIdAndUpdate(
          user._id,
          { $set: { "otp.value": "", "email.isVarified": true } },
          { new: true }
        );

        res.json({
          success: true,
          message: "Email Verification Done!",
        });
      } catch (error) {
        return res.status(500).json({
          success: false,
          message: "Something went wrong with the update!",
          error: error.message,
        });
      }
      break;
  }
}
