import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import mongoose from "mongoose";
const port = process.env.PORT || 3000;

const database = process.env.MONGO_URI.replace(
  "<password>",
  process.env.DB_PASSWORD
);

mongoose
  .connect(database)
  .then(() => console.log("mongo connected successfully!"))
  .catch((err) => console.error("mongo connection failed!", err));

app.listen(port, () => {
  console.log(`server started at http://127.0.0.1:${port}`);
});
