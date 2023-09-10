import express from "express";
import { loginUser } from "../../models/auth/signin.model.js";

const loginRouter = express.Router();
loginRouter.post("/", loginUser);

export { loginRouter };
