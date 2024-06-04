import dbConnect from "@/src/config/dbConnect";
import Salary from "@/src/models/salary";
import Employee from "@/src/models/employees";
export default async function handler(req, res) {
  dbConnect();
  switch (req.method) {
    case "GET":
      try {
        const employees = await Employee.aggregate([
          {
            $lookup: {
              from: "salarys", // the name of the collection to join
              localField: "_id", // field from the employees collection
              foreignField: "employee", // field from the salarys collection
              as: "salaries", // output array field
            },
          },

          {
            $unwind: {
              path: "$salaries",
              preserveNullAndEmptyArrays: true,
            },
          },
          {
            $addFields: {
              allowanceFrequency: "$salaries.allowancefrequency",
              overtimeHour: "$salaries.overtimeHour",
              NoOfdeduction: "$salaries.NoOfdeduction",
              isbonusgiven: "$salaries.isbonusgiven",
              bonus: "$bonus",
              salary: "$salary",
              allowance: "$allowance",
              overtime: "$overtime",
              deduction: "$deduction",
              loan: "$loan",
            },
          },
          {
            $addFields: {
              grossPay: {
                $add: [
                  "$salary",
                  { $multiply: ["$allowanceFrequency", "$allowance"] },
                  { $multiply: ["$overtime", "$overtimeHour"] },
                ],
              },
              totalDeduction: {
                $multiply: ["$deduction", "$NoOfdeduction"],
              },
            },
          },
          {
            $addFields: {
              netPay: {
                $subtract: ["$grossPay", "$totalDeduction"],
              },
            },
          },
          {
            $addFields: {
              netPay: {
                $cond: {
                  if: { $eq: ["$isbonusgiven", true] },
                  then: { $add: ["$netPay", "$bonus"] },
                  else: "$netPay",
                },
              },
            },
          },
          // {
          //   $addFields: {
          //     loanDeduction: {
          //       $cond: {
          //         if: { $gt: ['$loan', { $multiply: ['$salary', 0.18] }] },
          //         then: { $multiply: ['$salary', 0.18] },
          //         else: '$loan'
          //       }
          //     }
          //   }
          // },
          // {
          //   $addFields: {
          //     netPay: {
          //       $subtract: ['$netPay', '$loanDeduction']
          //     }
          //   }
          // },
          // {
          //   $addFields: {
          //     updatedLoan: {
          //       $subtract: ['$loan', '$loanDeduction']
          //     }
          //   }
          // },

          {
            $project: {
              __v: 0, // exclude the __v field
              password: 0, // exclude the password field
              salaries: 0, // exclude the salaries array if not needed
              allowanceFrequency: 0,
              overtimeHour: 0,
              salary: 0,
              allowance: 0,
              overtime: 0,

              isbonusgiven: 0,
              bonus: 0,

              netPay: 0,
            },
          },
        ]);

        // await Promise.all(employees.map(employee =>
        //   Employee.updateOne(
        //     { _id: employee._id },
        //     { $set: { loan: employee.updatedLoan } }
        //   )
        // ));

        res.json(employees);
      } catch (error) {
        console.log(error);
        res.status(500).json({
          success: false,
          message: "Something Went Wrong!",
        });
      }
      break;
    case "POST":
      try {
        const salary = new Salary(req.body);
        await salary.save();
        // Find the employee related to this salary document
        const employee = await Employee.findById(req.body.employee);

        if (employee) {
          // Calculate the loan deduction
          const maxDeduction = employee.salary * 0.18;
          const loanDeduction = Math.min(employee.loan, maxDeduction);

          // Update the employee's loan amount
          employee.loan -= loanDeduction;

          // Save the updated employee document
          await employee.save();

          res.status(201).json({
            success: true,
            message: "Salary Added Successfully!",
            loanDeduction: loanDeduction,
            updatedLoan: employee.loan,
          });
        } else {
          res.status(404).json({
            success: false,
            message: "Employee not found!",
          });
        }
      } catch (err) {
        // For duplicate Error
        if (err.code === 11000) {
          return res.status(409).json({
            success: false,
            message: `${Object?.keys(err.keyPattern)[0]} is already in used!`,
          });
        }

        // required fields error handling

        var requiredFildName = Object?.keys(err.errors)[0];
        console.log(requiredFildName);
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
