import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import HomeScreen from "./screens/HomeScreen.jsx";
import ProductScreen from "./screens/ProductScreen.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index={true} path="/" element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
