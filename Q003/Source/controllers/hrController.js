import { User } from "../model/user.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

const createUser = async (req, res) => {
  const { username, password, role } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
  const user = new User({
    username: username,
    password: hashPassword,
    role: role,
  });
  const savedUser = await user.save();
  console.log(savedUser);

  res.status(201).json(savedUser);
};

const updateUser = async (req, res) => {
  const data = await User.findByIdAndUpdate(req.params.id, req.body);
  res.send(data);
};

const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send("delete user");
};

export { createUser, updateUser, deleteUser };
