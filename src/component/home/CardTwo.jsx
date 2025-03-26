import React from "react";
import Grater from "../../assets/images/cartTwo/grater.png";
import Img1 from "../../assets/images/cardOne/img1.png";

const CardTwo = () => {
  const lists = [
    {
      name: "Appliance for Cool Summer",
      itemList: [
        { id: 1, image: Img1, name: "Best Camera", price: "1000" },
        { id: 2, image: Img1, name: "Best Camera", price: "2000" },
        { id: 3, image: Img1, name: "Best Camera", price: "3000" },
        { id: 4, image: Img1, name: "Best Camera", price: "4000" },
      ],
    },
    {
      name: "Season's Top Picks",
      itemList: [
        { id: 1, image: Img1, name: "Best Camera", price: "80%" },
        { id: 2, image: Img1, name: "Best Camera", price: "80%" },
        { id: 3, image: Img1, name: "Best Camera", price: "80%" },
        { id: 4, image: Img1, name: "Best Camera", price: "80%" },
      ],
    },
    {
      name: "Make Your Home Stylish",
      itemList: [
        { id: 1, image: Img1, name: "Best Camera", price: "80%" },
        { id: 2, image: Img1, name: "Best Camera", price: "80%" },
        { id: 3, image: Img1, name: "Best Camera", price: "80%" },
        { id: 4, image: Img1, name: "Best Camera", price: "80%" },
      ],
    },
  ];

  return (
    <>
      {/* parent main div */}
      <div className="md:flex md:justify-evenly md:gap-1 md:pt-6 md:pb-2 md:px-5 bg-white">
        {lists.map((list, index) => (
          // parent sub div
          <div
            key={index}
            className="md:w-full shadow-xl md:px-2 border-gray-800"
          >
            <div className="flex justify-between items-center py-5 px-4 md:flex md:justify-between md:items-center md:py-5 md:px-3">
              <h2 className="font-semibold text-2xl">{list.name}</h2>
              <div className="w-6 h-6">
                <img src={Grater} alt="" />
              </div>
            </div>
            {/* child main div */}
            <div className="grid grid-cols-2 md:gap-x-2 gap-y-2 gap-x-2 md:gap-y-2 md:py-2 md:px-3 px-4">
              {list.itemList.map((item) => (
                // child sub div
                <div
                  key={index}
                  className=" w-full md:flex md:flex-col md:px-5 py-10 md:py-5 flex flex-col items-center bg-white shadow-2xl rounded-lg"
                >
                  <div className="w-20 h-20 md:w-40 md:h-40 object-contain md:py-5">
                    <img src={Img1} alt="" className="w-full h-full" />
                  </div>
                  <p className="text-xl">{item.name}</p>
                  <p className="text-green-600 font-bold text-xl">
                    Min. {item.price} Off
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardTwo;
