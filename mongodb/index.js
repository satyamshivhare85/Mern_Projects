import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import UserRouter from "./router/user_routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT||5000 ; // FIXED

app.use(express.json());

// Routes
app.use("/api", UserRouter);

// Start Server
app.listen(PORT, () => {
  connectDb(); 
  console.log(`Server started at port ${PORT}`);
});
