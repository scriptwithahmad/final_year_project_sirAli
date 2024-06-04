import dbConnect from "@/src/config/dbConnect";
import EmployeesModel from "@/src/models/employees";

export default async function handler(req, res) {
  dbConnect();

  switch (req.method) {
    case "PUT":
      try {
        const postId = req.body._id;

        const updateUser = await EmployeesModel.findByIdAndUpdate(
          postId,
          {
            $set: req.body,
          },
          {
            new: true,
          }
        );

        if (!updateUser) {
          return res.status(400).json({
            success: false,
            message: "User Not Found!",
          });
        }

        return res.status(200).json({
          success: true,
          message: updateUser,
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
    default:
      return;
  }
}
