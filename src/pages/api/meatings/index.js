import dbConnect from "@/src/config/dbConnect";
import meatingsModel from "@/src/models/meatings";
import EmployeeModel from "@/src/models/employees"
import mailjet from "@/src/helpers/mailjet";


export default async function handler(req, res) {
    dbConnect()
    switch (req.method) {
        case "GET":
          try {
            var match = {};
    
            const page = req.query.page || 1;
            const limit = req.query.limit || 10;
            const skip = (page - 1) * limit;
    
            if (req.query.keyword) {
              match.$or = [
                { title: new RegExp(req.query.keyword, "i") },
                { room: new RegExp(req.query.keyword, "i") },
                { phone: new RegExp(req.query.keyword, "i") },
              ];
            }
    
            let items = await meatingsModel.find(match)
              .limit(limit)
              .skip(skip)
              .sort({createdAt:-1})
            const total = await meatingsModel.find(match).count();
    
            var starting = total ? skip + 1 : 0;
            var ending = starting + (limit - 1) > total ? total : starting + (limit - 1);
            const currentDate = new Date();
            items = items.map(meeting => {
              const meetingDate = new Date(meeting.date);
              const endTime = new Date(meetingDate.toDateString() + " " + meeting.endTime);
              if (meetingDate < currentDate || endTime < currentDate) {
                meeting.status = "completed";
              }
              return meeting;
            });
            res.status(200).json({
              success: true,
              message: {
                data: items,
                count: total,
                starting,
                ending,
              },
            });
          } catch (error) {
            console.log(error)
            res.status(500).json({
              success: false,
              message: "Something Went Wrong!",
            });
          }
          break;
        case "POST":
          try {
    
            var item = await meatingsModel.create(req.body);
            const participantsEmails = await EmployeeModel.find(
              { _id: { $in: item.participants } },
              { email: 1, _id: 0 }
            );
            // console.log(participantsEmails)
            // console.log(participantsEmails)
        
            // Extract the email addresses from the participants' documents
            participantsEmails.map(async (participant) =>{
              await mailjet(
                participant.email.value,
                participant.fullName,
                "Invitation for Meating",
                `You have been invited to the Meating titled "${item.title}" on ${item.date} from ${item.startTime} to ${item.endTime}.`
              );
            });
    
            res.status(201).json({
              success: true,
              message: "Added Successfully!",
              data:item
            });
    
    
          } catch (err) {
    
    
            // For duplicate Error
            if (err.code === 11000) {
              return res.status(409).json({
                success: false,
                message:`${Object.keys(err.keyPattern)[0]} is already in used!`,
              });
            }
    
            // required fields error handling
            var requiredFildName = Object?.keys(err.errors)[0]
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