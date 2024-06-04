import mongoose from "mongoose";

const meetingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    date:{
      type: Date,

    },
    room: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    participants: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "employees" }],
      required: true,
    },
    status: {
      type: String,
      enum: ["scheduled", "completed"],
      default: "scheduled",
    },
  },
  { timestamps: true }
);

meetingSchema.pre("save", function (next) {
  const currentDate = new Date();
  const meetingDate = new Date(this.date);
  const endTime = new Date(meetingDate.toDateString() + " " + this.endTime);

  if (meetingDate < currentDate || endTime < currentDate) {
    this.status = "completed";
  }
  next();
});
export default mongoose.models?.meatings ||
  mongoose.model("meatings", meetingSchema);