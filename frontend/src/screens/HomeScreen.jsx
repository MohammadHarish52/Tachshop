import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Product from "../components/Product";
import { useEffect, useState } from "react";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/products`);
        console.log("Data received from API:", data); // Check the structure of data
        setProducts(data); // Assuming data is an array of products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
