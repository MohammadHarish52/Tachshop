import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
dotenv.config();

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const Port = process.env.PORT;

connectDB();

const app = express();
// body parser
app.use(express.json());
// enable CORS
app.use(cors());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API is running");
});

// pass this to the ProductRoutes file as the endpoint

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(Port, () => console.log(`Server started on port ${Port}`));
