import express from "express";
import dotenv from "dotenv";
dotenv.config();
import products from "./data/products.js";

const Port = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

// Get all Products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Get a specific product
app.get("/api/product/:id", (req, res) => {
  const product = products.find((p) => {
    p._id === req.params.id;
  });
});

app.listen(Port, () => console.log(`Server started on port ${Port}`));
