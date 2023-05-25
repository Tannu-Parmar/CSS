import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";
export const userRoute = express.Router();

userRoute.post("/user", registerUser);
userRoute.post("/user/:id", loginUser);
