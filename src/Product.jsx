import React, { useEffect, useState } from "react";
import ProductCard from "./component/ProductCard";
import TabFilter from "./component/TabFilter";
import CustomerRating from "./component/CustomerRating";

const Product = () => {
  const [productDataList, setProductDataList] = useState();
  const [oldData, setOldData] = useState([]);

  useEffect(() => {
    productData();
  }, []);

  const productData = async () => {
    const res = await fetch("http://localhost:3000/product");
    const result = await res.json();
    setProductDataList(result);
    setOldData(result);
  };

  const tabHandler = (data) => {
    if (data == "lowToHigh") {
      const store = [...oldData].sort((a, b) => b.price - a.price);
      setProductDataList(store);
    } else if (data == "highToLow") {
      const store = [...oldData].sort((a, b) => a.price - b.price);
      setProductDataList(store);
    }
  };

  const customerRatingHandling = (list) => {
    let storeList = [];

    for (let i = 0; i < oldData?.length; i++) {
      if (list?.includes(oldData[i].rating)) {
        storeList.push(oldData[i]);
      }
    }
    console.log(storeList);
    setProductDataList(storeList);
  };

  return (
    <>
      <TabFilter tabHandler={tabHandler} />
      <div className="md:px-5 md:flex md:gap-3">
        {/* ---------------Left Side---------------------- */}
        <div className="hidden md:h-100 md:border-3 md:w-75 md:px-5 md:block">
          <div>
            <h2 className="font-bold text-xl">Filters</h2>
            <CustomerRating customerRatingHandling={customerRatingHandling} />
          </div>
        </div>

        {/* -----------------------Right Side---------------------- */}

        <div className="grid grid-cols-1">
          {productDataList?.map((data) => (
            <ProductCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
