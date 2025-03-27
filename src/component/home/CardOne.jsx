import React from "react";

const CardOne = ({ cardOneListPro, type }) => {
  //   console.log("cardOneList : ", cardOneList.name);

  return (
    <>
      <div className="flex flex-col items-center px-10 py-4 cursor-pointer bg-white shadow-xl rounded-lg">
        <div className="md:w-25 md:h-25 w-20 h-20">
          <img
            src={cardOneListPro.image}
            alt=""
            className="w-full h-full object-contain transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 "
          />
        </div>
        <p className="truncate text-gray-900">{cardOneListPro.name}</p>
        {cardOneListPro?.isPer ? (
          <p className="font-bold text-gray-900">{cardOneListPro.price}</p>
        ) : (
          <p className="font-bold text-gray-900">
            &#8377;{cardOneListPro.price}
          </p>
        )}
      </div>
    </>
  );
};

export default CardOne;
