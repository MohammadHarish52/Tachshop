import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckOutSteps from "../components/CheckOutSteps";
import { Col, ListGroup, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { useCreateOrderMutation } from "../slices/ordersApiSlice";
import Message from "../components/Message";
import Loader from "../components/Loader.jsx";

const PlaceOrderScreen = () => {
  const dispatch = useDispatch();
  const naviagte = useNavigate();

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (!cart.shippingAddress.address) {
      naviagte("/shipping");
    } else if (!cart.paymentMethod) {
      naviagte("/payment");
    }
  }, [cart.paymentMethod, cart.shippingAddress.address, naviagte]);
  return (
    <>
      <CheckOutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping </h2>
              <p>
                {cart.shippingAddress.address} , {cart.shippingAddress.city},
                {cart.shippingAddress.postalCode},{" "}
                {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Orders Items</h2>
              <p>{cart.paymentMethod}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>Column</Col>
      </Row>
    </>
  );
};

export default PlaceOrderScreen;
