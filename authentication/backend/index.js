import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db_user.js"
import authRouter from "./routers/auth_router.js";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
app.use(cookieParser());
app.use(express.json());
const PORT = process.env.PORT || 4000;
app.use('/auth',authRouter);

app.listen(PORT,()=>{
    connectDb();
    console.log("server started");
})


