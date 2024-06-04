import dbConnect from "@/src/config/dbConnect";
import salaryModel from "@/src/models/salary";

export default async function handler(req, res) {
  dbConnect();

  switch (req.method) {
    case "GET":
      const salary = await salaryModel
        .find()
        .populate("employee", "fullName photo");
      res.status(200).json({
        success: true,
        message: salary,
      });

      break;

    case "POST":
      try {
        const addNewSalar = await salaryModel.create(req.body);
        res.status(201).json({
          success: true,
          message: addNewSalar,
        });
      } catch (error) {
        console.log(error);
      }

      break;

    default:
      res.status(203).json({
        success: false,
        message: "method not allowed",
      });

      break;
  }
}
