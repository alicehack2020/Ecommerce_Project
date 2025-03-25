import React from "react";
import Navbar from "./component/home/Navbar";
import CategoryComponent from "./component/home/Category";
import Crousal from "./component/home/Crousal";
import CardOne from "./component/home/CardOne";

const Home = () => {
  return (
    <>
      <Navbar />
      <CategoryComponent />
      <Crousal />
      <CardOne />
    </>
  );
};

export default Home;
