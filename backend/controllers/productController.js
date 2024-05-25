import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/ProductModel.js";

// @desc   Get all products
// @route  GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});
// @desc   Create a Product
// @route  POST /api/products
// @access Private
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample Name",
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    brand: "sample brand",
    category: "sample category",
    countInStock: 0,
    numReviews: 0,
    description: "Sample Description",
  });
  const createProduct = await product.save();
  res.json(createProduct);
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

// @desc   Update a product
// @route  GET /api/products/:id
// @access Private/admin
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;
  const product = await Product.findById(req.params.id);
  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updateProduct = await product.save();
    res.json(updateProduct);
  } else {
    res.status(404);
    throw new Error("resource not found");
  }
});

// @desc   delete a product
// @route  DELETe /api/products/:id
// @access Private/admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.deleteOne({
      _id: product._id,
    });
    res.json({ message: "product deleted" });
  } else {
    res.status(404);
    throw new Error("resource not found");
  }
});

export {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
