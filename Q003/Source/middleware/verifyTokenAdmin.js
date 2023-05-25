import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, process.env.SECRECT_KEY, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (data.savedUser.role == "HR") {
        next();
      } else {
        res.send("User are valid user");
      }
    }
  });
};
