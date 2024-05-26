import { useNavigate, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();
  const [keyword, setKeyword] = useState(urlKeyword || "");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      setKeyword("");
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <Form className="d-flex" onSubmit={submitHandler}>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        className="mr-sm-2 ml-sm-5"
        placeholder="Search Products..."
      ></Form.Control>
      <Button type="submit" variant="outline-light" className="mx-2 p-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
