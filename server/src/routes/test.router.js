import express from "express";
import { test } from "../models/test.model.js";
const testRouter = express.Router();
testRouter.get("/", test);

export { testRouter };
