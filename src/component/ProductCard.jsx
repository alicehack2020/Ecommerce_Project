import React from "react";

const ProductCard = ({ data }) => {
  return (
    <div>
      <div className="p-5 md:flex md:gap-3 md:justify-between md:px-10 md:py-6 md:mb-3">
        {/* -----------------------mobile image---------------------Left Side */}
        <div className="md:border">
          <div className="md:w-40 md:h-72">
            <img
              src={data.image}
              alt="mobile Image"
              className="mr-auto ml-auto md:mr-0 md:ml-0  md:h-full md:w-full md:object-contain"
            />
          </div>
          <div>
            <input type="checkbox" />{" "}
            <span className="text-lg md:text-sm md:font-bold md:text-gray-500 ">
              Add To Compare
            </span>
          </div>
        </div>
        {/* ----------------------description of mobile-----------------------Center */}
        <div className="md:pl-15 md:border">
          <h2 className="font-bold text-xl">
            SAMSUNG Galaxy F06 5G (Bahama Blue, 128 GB)
          </h2>
          <div className="flex gap-2">
            <span className="bg-green-500 px-2 rounded-sm text-white font-semibold">
              3<span className="text-xs"> ❤</span>{" "}
            </span>{" "}
            <span className="text-gray-400 font-semibold">
              {data.rating} Rating & 0 Reviews
            </span>
          </div>

          <ul className="md:text-gray-700 md:list-disc">
            {data?.details?.map((list) => (
              <li key={list}>{list}</li>
            ))}
          </ul>
        </div>
        {/* ---------------------price and discount of mobile----------------------Right Side */}
        <div className="md:border">
          <h2 className="font-bold text-2xl text-gray-600">${data.price}</h2>
          <span className="line-through text-gray-500">$13,999</span>{" "}
          <span className="text-green-600 font-semibold">28% off</span>
          <p>
            Upto <span className="font-semibold">$5,600</span> Off on Exchange
          </p>
          <p className="text-green-900 font-semibold">Bank Offer</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
