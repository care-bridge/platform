import { Router } from "express";
import { createUser } from "../controllers/users.contoller.js";
import validateRequest from "../middleware/validateRequest.js";
import { createUserSchema } from "../validators/users.validator.js";

const usersRouter = Router();

usersRouter.post("/", validateRequest(createUserSchema), createUser);

export default usersRouter;

