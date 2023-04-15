// importing packages
import express from "express";
import cors from "cors";
import todoRoute from "./routes/todoRoute.js";
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Global Routes
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Testing server endpoint!",
  });
});

app.use("/api/todos/", todoRoute);

app.all("*", (req, res) => {
  res.status(404).json({
    status: "failed",
    message: `this endpoint ${req.originalUrl} does not exist on this site!`,
  });
});

export default app;
