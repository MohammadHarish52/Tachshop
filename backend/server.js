import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
dotenv.config();

import productRoutes from "./routes/productRoutes.js";

const Port = process.env.PORT;

connectDB();

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running");
});

// pass this to the ProductRoutes file as the endpoint

app.use("/api/products", productRoutes);

app.listen(Port, () => console.log(`Server started on port ${Port}`));
