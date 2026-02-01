import express from "express"
import {Router} from "express"
import { login, logout, signup } from "../controllers/auth_controllers.js";

const authRouter =  express(Router());

authRouter.post('/signup',signup);
authRouter.post("/login",login);
authRouter.post("/logout",logout);



export default authRouter;