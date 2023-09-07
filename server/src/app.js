import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";
import cors from "cors";
import { emailRouter } from "./routes/email.router.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/////////////////////
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "..", "dist")));

app.use("/email", emailRouter);

export { app };
