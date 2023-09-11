import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import "dotenv/config";
import { loginRouter } from "./routes/auth.router.js";
import { userRouter } from "./routes/user.router.js";
import { signOut } from "firebase/auth";
import { auth } from "./config/firebase.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "..", "dist")));

app.use("/auth", loginRouter);
app.use("/userstate", userRouter);
app.get("/logout", async (req, res) => {
  try {
    await signOut(auth);
    res.send(`user successfully logged out`);
  } catch (error) {
    res.send(`user not logged in: ${error}`);
  }
});

export { app };
