import mongoose, { Types } from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    owner: {
      type: Types.ObjectId,
      ref: "User",
      required: true,  
    },
    text: {
      type: String,
      required: true,  
    },
    completed: {
      type: Boolean,
      default: false,  
    },
    important: {
      type: Boolean,
      default: false,  
    },
  },
  { timestamps: true }  
);

export default mongoose.model("Todo", todoSchema);
