import React, { useContext, useEffect, useState } from "react";
import DetailPageImages from "../component/product/DetailPageImages";
import { useNavigate, useParams } from "react-router";
import { Context } from "../App";
import Cart from ".././assets/images/cart.png";

const Detailpage = () => {
  const [productDetail, setProductDetail] = useState();

  const { addHandler, data } = useContext(Context);

  // console.log("productDetail=======", productDetail?.price);

  const { id } = useParams();
  // console.log(id);

  const navigate = useNavigate();

  useEffect(() => {
    fetchFunction();
  }, []);

  const fetchFunction = async () => {
    const fetchData = await fetch(`http://localhost:3000/product/${id}`);
    const result = await fetchData.json();
    setProductDetail(result);

    // console.log("result===", result);
  };

  const checkoutHandler = () => {
    navigate("/checkoutpage");
  };

  return (
    <>
      {/* ----------main container-------- */}
      <div>
        {/* navbar */}
        {/* header section */}

        {/* left and right parent */}
        <div className="md:flex">
          {/* left side */}
          <div className=" md:w-[40%]">
            <div className="md:flex w-full">
              {/* ----------------small verticals mobile images------------- */}
              <div className="hidden md:block">
                <DetailPageImages
                  productDetailImageList={productDetail?.imagesList}
                />
              </div>

              {/* ------------Big  mobile Image----------- */}
              <div className="md:w-full h-auto flex justify-center">
                <img
                  src={productDetail?.image}
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
              <button
                onClick={() => addHandler(productDetail)}
                className="  cursor-pointer p-2 md:p-3 w-[40%] md:w-[20%] - border border-gray-300 "
              >
                <div className="w-6 h-6 md:ml-auto md:mr-auto">
                  <img src={Cart} alt="Cart Basket " />
                </div>
              </button>

              <button className="text-xs md:text-lg w-full p-2 md:p-3 md:w-[50%] text-center cursor-pointer md:flex md:justify-center border border-gray-300">
                PAY WITH EMI
              </button>

              <button
                onClick={() => {
                  addHandler(productDetail);
                  navigate("/checkoutpage");
                }}
                className="cursor-pointer p-3 text-xs md:text-lg md:p-3 w-full md:w-[50%] text-center md:flex md:justify-center bg-amber-500"
              >
                BUY NOW
              </button>
            </div>
          </div>

          {/* -----------right side (details about mobile)---------- */}
          <div className=" w-full md:w-[60%] h-auto px-3">
            {/* empty Home > Mobile etc*/}
            <h3 className="text-xl text-gray-600 pb-1">
              {productDetail?.productName}
            </h3>
            <div className="pb-5">
              <span className="bg-green-500 px-1  text-white">
                4.2 <span className="text-xs">❤</span>
              </span>
              <span className="text-gray-500 pl-2 font-semibold">
                {productDetail?.rating}Rating & 643 Reviews
              </span>
            </div>
            <h1 className="font-bold text-2xl">
              <span>&#8377;</span>
              {productDetail?.price}/month
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
                {productDetail?.details?.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={checkoutHandler}
              className=" px-3 py-1 cursor-pointer"
            >
              Checkout
            </button>
          </div>
        </div>
        <h2>{data?.length}</h2>
      </div>
    </>
  );
};

export default Detailpage;
