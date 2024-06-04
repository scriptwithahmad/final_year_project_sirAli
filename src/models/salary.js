import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define the Application schema
const documentSchema = new Schema(
  {
    employee: {
      type: Schema.Types.ObjectId,
      ref: "employees",
      required: true,
    },

    allowancefrequency: {
      type: Number,
    },
    isbonusgiven: {
      type: Boolean,
      default: false,
    },
    
    NoOfdeduction: {
      type: Number,
    },
    deductiontype: {
      type: [String],
    },
    overtimeHour: {
      type: Number,
    },
    netPay: {
      type: Number,
    },
    paymentMethod: {
      type: String,
      enum: ["online", "cash"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models?.salarys || mongoose.model("salarys", documentSchema);
