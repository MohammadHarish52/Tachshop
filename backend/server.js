import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
dotenv.config();
import products from "./data/products.js";

const Port = process.env.PORT;

connectDB();

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running");
});

// Get all Products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Get a specific product
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(Port, () => console.log(`Server started on port ${Port}`));
