import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Basic", "HR"],
    default: "Basic",
  },
});

export const User = mongoose.model("User", userSchema);
