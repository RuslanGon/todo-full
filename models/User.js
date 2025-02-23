import mongoose, { Types } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    todos: [{
        type: Types.ObjectId,
        ref: 'Todo',
      },]
   
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema)