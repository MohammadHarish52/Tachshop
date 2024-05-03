import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/ProductModel.js";

// @desc   Get all products
// @route  GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc      Get single product using ID
// @route     GET /api/products/:id
// @access    Private (for now)
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("resource not found");
  }
});

export { getProducts, getProductById };
