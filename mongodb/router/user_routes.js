import express from "express";
import {
  home,
  createUser,
  getAllUsers,
  getUserByUsername,
  updateUser,
  deleteUser,
} from "../controllers/user.controllers.js";

const UserRouter = express.Router();

UserRouter.get("/", home);
UserRouter.post("/create", createUser);
UserRouter.get("/users", getAllUsers);
UserRouter.get("/users/username/:username", getUserByUsername);
UserRouter.patch("/users/:id", updateUser);
UserRouter.delete("/users/:id", deleteUser);

export default UserRouter;
