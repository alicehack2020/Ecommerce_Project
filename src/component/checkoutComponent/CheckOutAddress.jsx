import React from "react";

const CheckOutAddress = () => {
  return (
    <>
      {/* left and right address section container */}
      <div className="border border-y-gray-200 border-x-0 border-t-0 flex justify-between items-center px-4 py-2 md:px-10 md:py-2">
        {/* left section of address */}
        <div>
          <p className="pb-2 text-xs md:text-[15px]">
            <span>
              Deliver to:{" "}
              <span className="font-semibold">Vijay Pandit, 431001</span>
            </span>
            <span className="ml-5 text-xs bg-gray-300 p-1 px-2 text-gray-600">
              HOME
            </span>
          </p>
          <p className="text-gray-700 text-xs md:text-[15px]">
            Patel function hall, Kolthanwadi Road, AURANGABAD
          </p>
        </div>

        {/* right section of address */}
        <div>
          <div className="border border-gray-300 px-3 py-2 cursor-pointer text-sm rounded-md">
            <button className="text-blue-600 font-semibold cursor-pointer">
              Change
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutAddress;
