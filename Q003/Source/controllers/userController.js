import { User } from "../model/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

const registerUser = async (req, res) => {
  const { username, password, role } = req.body;

  const hashpassword = await bcrypt.hash(password, 10);
  const user = new User({
    username: username,
    password: hashpassword,
    role: role,
  });

  const saveUser = await user.save();

  const token = jwt.sign({ saveUser }, process.env.SECRECT_KEY, {
    expiresIn: "1h",
  });

  res.json({ saveUser, token });
  // res.send(saveUser)
};

const loginUser = async (req, res) => {
  const findData = await User.findById(req.params.id);
  bcrypt.compare(req.body.password, findData.password, (err, result) => {
    if (result) {
      res.send("Login success");
    } else {
      res.send("Login failure");
    }
  });
  res.status(201).json(findData);
};

export { registerUser, loginUser };
