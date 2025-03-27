import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home";
import About from "./About";
import Product from "./Product";

import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Detailpage from "./pages/Detailpage";
import CheckOutPage from "./pages/CheckOutPage";

export const Context = createContext();

function App() {
  // global
  const [data, setData] = useState([]);

  // console.log("data : ", data);

  const deleteHandler = (id) => {
    // console.log("id : ", id);
    let list = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].id != id) {
        list.push(data[i]);
      }
    }
    setData(list);
    // console.log("list", list);
  };

  const addHandler = (productDetail) => {
    // console.log("data : ", data);
    console.log("productDetail : ", productDetail);
    // [[{}],{}] = without ...data
    //[{},{},{}] = with ...data
    //push logic
    setData([...data, productDetail]);
  };

  const updateHandler = (value, id) => {
    console.log(typeof value);

    let store = null;
    for (let i = 0; i < data.length; i++) {
      // console.log(data[i]);

      if (data[i].id == id) {
        store = data[i];
      }
    }
    //console.log("store : ", store); //single object
    store.quntity = value; //5
    // console.log("store : ", store);

    let list = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == store.id) {
        list.push(store); //{}
      } else {
        list.push(data[i]);
      }
    }
    setData(list);
    // console.log("data : ", data);
  };

  return (
    <>
      <Context.Provider
        value={{ deleteHandler, addHandler, data, updateHandler }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:name" element={<Product />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/detailpage/:id" element={<Detailpage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkoutpage" element={<CheckOutPage />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;
