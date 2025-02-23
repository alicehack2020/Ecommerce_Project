import React from "react";

const ProductCard = ({ data }) => {
  return (
    <div>
      <div className="p-5  md:flex md:justify-between md:px-10 md:py-6">
        {/* mobile image */}
        <div>
          <img
            src={data.image}
            alt="mobile Image"
            className="mr-auto ml-auto md:mr-0 md:ml-0"
          />
          <div>
            <input type="checkbox" />{" "}
            <span className="text-lg md:text-sm md:font-bold md:text-gray-500">
              Add To Compare
            </span>
          </div>
        </div>
        {/* description of mobile */}
        <div className="md:pl-15">
          <h2 className="font-bold text-xl">
            SAMSUNG Galaxy F06 5G (Bahama Blue, 128 GB)
          </h2>
          <div className="flex gap-2">
            <span className="bg-green-500 px-2 rounded-sm text-white font-semibold">
              3<span className="text-xs"> ❤</span>{" "}
            </span>{" "}
            <span className="text-gray-400 font-semibold">
              3 Rating & 0 Reviews
            </span>
          </div>

          <ul className="md:text-gray-700 md:list-disc">
            {data?.details?.map((list) => (
              <li key={list.id}>{list}</li>
            ))}
          </ul>
        </div>
        {/* price and discount of mobile */}
        <div>
          <h2 className="font-bold text-2xl">$9,999</h2>
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
