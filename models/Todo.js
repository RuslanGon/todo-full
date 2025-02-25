import mongoose, { Types } from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    owner: {
      type: Types.ObjectId,
      ref: "User",
    },
    text: {
      type: String,
    },
    completed: false,
    important: false,
  },
  { timestamps: true }
);

export default mongoose.model("Todo", todoSchema);
