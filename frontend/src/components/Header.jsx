import { Badge, Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  console.log("cartItems:", cartItems);
  let totalItems = 0;
  // Iterate over cartItems and sum up the quantities
  cartItems.forEach((item) => {
    // Check if the quantity property is a number before adding it to the total
    if (typeof item.qty === "number" && !isNaN(item.qty)) {
      totalItems += item.qty;
    }
  });
  console.log("totalItems:", totalItems);

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} alt="Logo" />
              TachShop
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link href="/cart">
                  <FaShoppingCart /> Cart
                  {cartItems &&
                    cartItems.length > 0 && ( // Check if cartItems is not undefined
                      <Badge
                        pill
                        bg="success"
                        style={{
                          marginLeft: "5px",
                        }}
                      >
                        {totalItems}
                      </Badge>
                    )}
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <FaUser /> Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
