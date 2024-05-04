import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: "120px",
        height: "120px",
        margin: "auto",
        display: "block",
      }}
    />
  );
};

export default Loader;
