import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home";
import About from "./About";
import Product from "./Product";

import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Detailpage from "./pages/Detailpage";
import CheckOutPage from "./pages/CheckOutPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/detailpage/:id" element={<Detailpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkoutpage" element={<CheckOutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
