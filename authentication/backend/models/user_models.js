import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    profile_img: {
      type: String, // URL or file path
      default: null,
    },
    username: {
      type: String, // URL or file path
      required:true,
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
