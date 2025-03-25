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
          <div className="md:w-[40%]">
            <div className="w-full md:flex">
              {/* ----------------small verticals mobile images------------- */}
              <div className="hidden md:block">
                <DetailPageImages
                  productDetailImageList={productDetail?.imagesList}
                />
              </div>

              {/* ------------Big  mobile Image----------- */}
              <div className="flex h-auto justify-center md:w-full">
                <img
                  src={productDetail?.image}
                  alt=""
                  className="h-auto w-auto py-3"
                />
              </div>
              <div className="block md:hidden">
                <DetailPageImages />
              </div>
            </div>

            {/* payment and buy now */}
            <div className="flex h-max gap-0.5 md:gap-1.5 md:h-14 md:pb-0 md:text-md md:w-full pb-5">
              <button
                onClick={() => addHandler(productDetail)}
                className="border border-gray-300 p-2 w-[40%] - cursor-pointer md:p-3 md:w-[20%]"
              >
                <div className="h-6 w-6 md:ml-auto md:mr-auto">
                  <img src={Cart} alt="Cart Basket " />
                </div>
              </button>

              <button className="border border-gray-300 p-2 text-center text-xs w-full cursor-pointer md:flex md:justify-center md:p-3 md:text-lg md:w-[50%]">
                PAY WITH EMI
              </button>

              <button
                onClick={() => {
                  addHandler(productDetail);
                  navigate("/checkoutpage");
                }}
                className="bg-amber-500 p-3 text-center text-xs w-full cursor-pointer md:flex md:justify-center md:p-3 md:text-lg md:w-[50%]"
              >
                BUY NOW
              </button>
            </div>
          </div>

          {/* -----------right side (details about mobile)---------- */}
          <div className="h-auto w-full md:w-[60%] px-3">
            {/* empty Home > Mobile etc*/}
            <h3 className="text-gray-600 text-xl pb-1">
              {productDetail?.productName}
            </h3>
            <div className="pb-5">
              <span className="bg-green-500 text-white px-1">
                4.2 <span className="text-xs">❤</span>
              </span>
              <span className="text-gray-500 font-semibold pl-2">
                {productDetail?.rating}Rating & 643 Reviews
              </span>
            </div>
            <h1 className="text-2xl font-bold">
              <span>&#8377;</span>
              {productDetail?.price}/month
            </h1>
            <p className="pb-4">
              36 months EMI Plan with BOBCARD{" "}
              <span className="text-blue-400 font-medium">Details</span>{" "}
            </p>
            <p className="text-green-400 text-sm font-semibold">
              Extra <span>&#8377;</span>1500 off
            </p>
            <p className="pb-2">
              <span className="text-xl font-bold">&#8377; 13,490 </span>
              <span className="text-gray-500 text-sm line-through">
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
              className="cursor-pointer px-3 py-1"
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
