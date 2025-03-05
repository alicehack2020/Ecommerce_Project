import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home";
import About from "./About";
import Registration from "./pages/Registration";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
