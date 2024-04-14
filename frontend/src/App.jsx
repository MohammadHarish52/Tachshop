import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welocome to Tachshop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
