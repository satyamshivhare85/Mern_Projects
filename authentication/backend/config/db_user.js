import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL)
    console.log("mongoDb Connected")
    
    }
  catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};

export default connectDb;
