import mongoose from "mongoose";

const user_schema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    username: { type: String, required: true, unique: true },

    age: { type: Number, required: true },

    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", user_schema);

export default User;
