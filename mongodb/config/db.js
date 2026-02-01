import mongoose from "mongoose";
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    console.log("mongoDb connected");
  } catch {
    console.error("mongodb connection failed");
  }
};

export default connectDb;