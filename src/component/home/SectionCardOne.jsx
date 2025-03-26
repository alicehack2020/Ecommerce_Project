import React from "react";
import CardOne from "./CardOne";
import Img1 from "../../assets/images/cardOne/img1.png";

const lists = [
  {
    name: "Best of Electronic",
    itemList: [
      { id: 1, image: Img1, name: "Best Camera", price: "1000" },
      { id: 2, image: Img1, name: "Best Camera", price: "2000" },
      { id: 3, image: Img1, name: "Best Camera", price: "3000" },
      { id: 4, image: Img1, name: "Best Camera", price: "4000" },
      { id: 5, image: Img1, name: "Best Camera", price: "5000" },
      { id: 6, image: Img1, name: "Best Camera", price: "6000" },
    ],
  },
  {
    name: "Beauty",
    itemList: [
      { id: 1, image: Img1, name: "Best Camera", price: "80%", isPer: true },
      { id: 2, image: Img1, name: "Best Camera", price: "80%", isPer: true },
      { id: 3, image: Img1, name: "Best Camera", price: "80%", isPer: true },
      { id: 4, image: Img1, name: "Best Camera", price: "80%", isPer: true },
      { id: 5, image: Img1, name: "Best Camera", price: "80%", isPer: true },
      { id: 6, image: Img1, name: "Best Camera", price: "80%", isPer: true },
    ],
  },
];

const SectionCardOne = () => {
  return (
    <>
      {lists.map((list) => (
        <div className="bg-white py-3 ">
          <h1 className="font-semibold text-2xl py-4">{list.name}</h1>
          <div className="md:flex md:gap-4 gap-x-2  grid grid-cols-2 gap-y-2">
            {list.itemList.map((cardOneList) => (
              <div className="w-full">
                <CardOne key={cardOneList.id} cardOneListPro={cardOneList} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default SectionCardOne;
