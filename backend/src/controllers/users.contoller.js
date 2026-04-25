import { UsersModel } from "../models/users.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

export const createUser = async (req, res) => {
  const { fullname, username, email, password } = req.body;

  const existingUsername = await UsersModel.findOne({ username });
  if (existingUsername) {
    throw new ApiError(409, "Username already exists");
  }

  const user = await UsersModel.create({
    fullname,
    username,
    email,
    password_hash: password,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, user, "User created successfully"));
};
