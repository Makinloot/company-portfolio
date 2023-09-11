import express from "express";
import { userState } from "../models/user.model.js";

const userRouter = express.Router();
userRouter.get("/", userState);

export { userRouter };
