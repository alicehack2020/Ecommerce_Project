import React from "react";
import Grater from "../../assets/images/cartTwo/grater.png";
import Img1 from "../../assets/images/cardOne/img1.png";
import { useNavigate } from "react-router";

const CardTwo = ({ lists }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="md:flex md:justify-evenly md:gap-3 md:pt-6 md:pb-2 md:px-5 bg-white">
        {lists.map((list) => (
          <div
            key={list.id}
            className="md:w-full shadow-xl md:px-4 border border-gray-300"
          >
            <div className="flex justify-between items-center py-5 px-4 md:flex md:justify-between md:items-center md:py-5 md:px-3">
              <h2 className="font-semibold text-xl md:text-lg">{list.name}</h2>
              <div className="w-6 h-6">
                <img src={Grater} alt="Grater" />
              </div>
            </div>
            <div className="grid grid-cols-2 md:gap-x-2 gap-y-2 gap-x-2 md:gap-y-2 md:py-2 md:px-3 py-3 px-4">
              {list.itemList.map((item) => (
                <div
                  onClick={() => navigate(`/product/${list.type}`)}
                  key={item.id}
                  className=" w-full md:flex md:flex-col md:px-5  py-10 md:py-5 flex flex-col items-center bg-white shadow-2xl border border-gray-300"
                >
                  <div className="md:w-20 md:h-35 w-20  h-20 object-contain md:py-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
                    <img
                      src={item.image}
                      alt="image"
                      className="w-full h-full"
                    />
                  </div>
                  .<p className="text-md ">{item.name}</p>
                  <p className="text-green-600 font-bold text-md ">
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
