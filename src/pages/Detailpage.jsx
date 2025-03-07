import React from "react";
import DetailPageImages from "../component/DetailPageImages";

const Detailpage = () => {
  return (
    <>
      {/* ----------main container-------- */}
      <div>
        {/* navbar */}
        {/* header section */}

        {/* left and right parent */}
        <div className="md:flex">
          {/* left side */}
          <div className="border border-gray-900 md:w-[40%]">
            <div className="md:flex w-full">
              {/* ----------------small verticals mobile images------------- */}
              <div className="hidden md:block">
                <DetailPageImages />
              </div>

              {/* ------------Big  mobile Image----------- */}
              <div className="md:w-full h-auto flex justify-center">
                <img
                  src="https://rukminim2.flixcart.com/image/416/416/k1fbmvk0/mobile/4/f/f/mi-redmi-8-mzb8251in-original-imafhyacvweh9gxf.jpeg"
                  alt=""
                  className="w-auto h-auto py-3"
                />
              </div>
              <div className="block md:hidden">
                <DetailPageImages />
              </div>
            </div>

            {/* payment and buy now */}
            <div className="md:w-full h-max md:text-md  md:h-14 flex gap-0.5 md:gap-1.5 pb-5 md:pb-0">
              <div className="border p-2 md:p-3 w-[40%] md:w-[20%] cursor-pointer hover:bg-amber-500 flex justify-center">
                <button>❤</button>
              </div>
              <div className="border text-xs md:text-lg w-full p-2 md:p-3 md:w-[50%] text-center cursor-pointer flex justify-center hover:bg-amber-500">
                <button className="cursor-pointer">PAY WITH EMI</button>
              </div>
              <div className="border p-3 text-xs md:text-lg md:p-3 w-full md:w-[50%] text-center  cursor-pointer flex justify-center hover:bg-amber-500">
                <button className="cursor-pointer">BUY NOW</button>
              </div>
            </div>
          </div>

          {/* -----------right side (details about mobile)---------- */}
          <div className=" w-full md:w-[60%] h-auto px-3">
            {/* empty Home > Mobile etc*/}
            <h3 className="text-xl text-gray-600 pb-1">
              Mi 11 Lite (Jazz Blue, 128 GB) (8 GB RAM)
            </h3>
            <div className="pb-5">
              <span className="bg-green-500 px-1 border text-white">
                4.2 <span className="text-xs">❤</span>
              </span>
              <span className="text-gray-500 pl-2 font-semibold">
                6,441 Rating & 643 Reviews
              </span>
            </div>
            <h1 className="font-bold text-2xl">
              <span>&#8377;</span>475/month
            </h1>
            <p className="pb-4">
              36 months EMI Plan with BOBCARD{" "}
              <span className="text-blue-400 font-medium">Details</span>{" "}
            </p>
            <p className="text-green-400 font-semibold text-sm">
              Extra <span>&#8377;</span>1500 off
            </p>
            <p className="pb-2">
              <span className="font-bold text-xl">&#8377; 13,490 </span>
              <span className="text-sm line-through text-gray-500">
                &#8377; 25,999
              </span>
              <span className="text-green-400 font-semibold"> 48% off</span>
            </p>
            {/* Highlights */}
            <div>
              <ul className="text-gray-700">
                <li>8 GB RAM | 128 GB ROM | Expandable Upto 512 GB</li>
                <li>16.64 cm (6.55 inch) Full HD+ Display</li>
                <li>64MP + 8MP + 5MP | 16MP Front Camera</li>
                <li>4250 mAh Li-Polymer Battery</li>
                <li>Qualcomm Snapdragon 732G Processor</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detailpage;
