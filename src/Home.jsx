import React from "react";
import Navbar from "./component/home/Navbar";
import CategoryComponent from "./component/home/Category";
import Crousal from "./component/home/Crousal";
import CardOne from "./component/home/CardOne";
import CardTwo from "./component/home/CardTwo";
import SectionCardOne from "./component/home/SectionCardOne";
import Img1 from "./assets/images/cardOne/img1.png";
import SectionCardTwo from "./component/home/SectionCardTwo";

// const lists1 = [
//   {
//     name: "Appliance for Cool Summer",
//     itemList: [
//       { id: 1, image: Img1, name: "Best Camera", price: "1000" },
//       { id: 2, image: Img1, name: "Best Camera", price: "2000" },
//       { id: 3, image: Img1, name: "Best Camera", price: "3000" },
//       { id: 4, image: Img1, name: "Best Camera", price: "4000" },
//     ],
//   },
//   {
//     name: "Season's Top Picks",
//     itemList: [
//       { id: 1, image: Img1, name: "Best Camera", price: "80%" },
//       { id: 2, image: Img1, name: "Best Camera", price: "80%" },
//       { id: 3, image: Img1, name: "Best Camera", price: "80%" },
//       { id: 4, image: Img1, name: "Best Camera", price: "80%" },
//     ],
//   },
//   {
//     name: "Make Your Home Stylish",
//     itemList: [
//       { id: 1, image: Img1, name: "Best Camera", price: "80%" },
//       { id: 2, image: Img1, name: "Best Camera", price: "80%" },
//       { id: 3, image: Img1, name: "Best Camera", price: "80%" },
//       { id: 4, image: Img1, name: "Best Camera", price: "80%" },
//     ],
//   },
// ];

const Home = () => {
  return (
    <>
      <Navbar />
      <CategoryComponent />
      <Crousal />

      <SectionCardOne />
      <SectionCardTwo />
    </>
  );
};

export default Home;
