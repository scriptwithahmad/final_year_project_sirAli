import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Name is Required!"],
    },

    employeeID: {
      type: Number,
      required: true,
      unique: true,
    },
    cnic: {
      type: String,
      unique: true,
      required: [true, "CNIC is Required!"],
    },
    designation: {
      type: String,
      required: [true, "Designation is Required!"],
    },
    phone: {
      type: String,
      unique: true,
      required: [true, "Phone Number is Required!"],
    },
    email: {
      value: {
        type: String,
        unique: [true, "Email Already Exist"],
      },
      isVarified: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    photo: {
      type: String,
      default: "",
    },
    dob: {
      type: Date,
      required: [true, "Date of Birth is Required!"],
    },
    joining_date: {
      type: Date,
      required: [true, "Date of Birth is Required!"],
    },
    department: {
      type: String,
      required: [true, "Role Title is Required!"],
    },
    jobDescription: {
      type: String,
      required: [true, "Role Description is Required!"],
    },

    status: {
      type: String,
      required: true,
      enum: ["Active", "Inactive", "Resigned", "Fired"],
      default: "Active",
    },
    resignedOrFiredDate: {
      type: Date,
    },
    salary: {
      type: Number,
    },
    allowance: {
      type: Number,
    },
    deduction: {
      type: Number,
    },
    overtime: {
      type: Number,
    },
    bonus: {
      type: Number,
    },
    loan: {
      type: Number,
    },
    username: {
      type: String,
      required: [true, "Username is Required!"],
      unique: [true, "Username Already Exist"],
    },
    password: {
      type: String,
      required: [true, "Password is Required!"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
      required: [true, "Is Admin Field is Required!"],
    },
    rights: [
      {
        resource: {
          type: String,
          trim: true,
        },
        accessType: {
          type: String,
          enum: ["readOnly", "readAndUpdate", "full"],
        },
      },
    ],
    otp: {
      value: Number,
      expirationTime: Number,
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models?.employees || mongoose.model("employees", EmployeeSchema);
