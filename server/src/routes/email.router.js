import express from "express";
import { sendEmail } from "../models/email.model.js";

const emailRouter = express.Router();
emailRouter.post("/", sendEmail);

export { emailRouter };
