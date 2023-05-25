import express from "express";
import {
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/hrController.js";

export const hrRoutes = express.Router();

hrRoutes.post("/hr/user", createUser);
hrRoutes.put("/hr/update/:id", updateUser);
hrRoutes.delete("/hr/delete/:id", deleteUser);
