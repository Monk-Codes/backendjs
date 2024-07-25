import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
 path: "./env",
});
connectDB()
 .then(() => {
  app.listen(process.env.PORT || 8000, () => {
   console.log("Database connected successfully");
  });
 })
 .catch((err) => {
  console.error(`Error connecting to the database: ${err.message}`);
  process.exit(1);
 });
