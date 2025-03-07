import React from "react";

const CheckOutPriceDetails = () => {
  return (
    // main container
    <>
      <div className="px-3 py-2 md:w-96">
        {/* heading */}
        <p className="text-md text-gray-500 font-semibold py-1 border border-b-gray-200 border-x-0 border-t-0 md:text-[17px]">
          PRICE DETAILS
        </p>

        {/* */}
        <div className="">
          <div className="flex justify-between py-1  text-sm  md:text-[16px] text-gray-500">
            <p>Price (6 items)</p>
            <p>
              <span className="font-semibold">
                <span>&#8377;</span>43,894
              </span>
            </p>
          </div>
          <div className="flex justify-between py-1 text-sm  md:text-[16px] text-gray-500">
            <p>Discount</p>
            <p>
              <span className="text-green-500 font-semibold">-10,300</span>
            </p>
          </div>
          <div className="flex justify-between py-1 text-sm  md:text-[16px] text-gray-500">
            <p>By more & save more</p>
            <p className="text-green-500 font-semibold">-500</p>
          </div>
          <div className="flex justify-between py-1 text-sm  md:text-[16px] text-gray-500">
            <p>Delivery Charges</p>
            <p>
              <span className="line-through text-gray-500 font-semibold">
                <span>&#8377;</span>80
              </span>
              <span className="text-green-500"> Free</span>
            </p>
          </div>
          <div className="flex justify-between py-1 text-sm  md:text-[16px] text-gray-500">
            <p>Secured Packaging Fee</p>
            <p>118</p>
          </div>
          <div className="font-bold flex justify-between py-3 border border-y-gray-200 border-l-0 border-r-0  text-sm  md:text-[16px] text-gray-500">
            <p>Total Amount</p>
            <p>33,212</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutPriceDetails;
