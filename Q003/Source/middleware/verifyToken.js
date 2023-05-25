import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verifyTokenLogin = (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, process.env.SECRECT_KEY, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      next();
    }
  });
};
