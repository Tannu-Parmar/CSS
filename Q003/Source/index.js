import express from "express";
import mongoose from "mongoose";
import { userRoute } from "./routes/userRoutes.js";
import { hrRoutes } from "./routes/hrRoutes.js";
import { verifyToken } from "./middleware/verifyTokenAdmin.js";

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/que1")
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((e) => {
    console.log("error connecting to MongoDB" + e);
  });

app.use("/", userRoute);
//app.use(verifyToken);
app.use("/", hrRoutes);

app.listen(5000, () => {
  console.log("listening on port 3000");
});
