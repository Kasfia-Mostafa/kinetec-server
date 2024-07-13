import cors from "cors";
import express, { Application, Request, Response } from "express";
import router from "./router";

const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", router);

const test = (req: Request, res: Response) => {
  res.send("Response is 10");
};

app.get("/", test);

export default app;
