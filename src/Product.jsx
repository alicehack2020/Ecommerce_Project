import React, { useEffect, useState } from "react";
import ProductCard from "./component/ProductCard";

const Product = () => {
  const [productDataList, useProductDataList] = useState();
  //console.log(productDataList);

  const data = {
    id: "1",
    image:
      "https://rukminim2.flixcart.com/image/312/312/k1fbmvk0/mobile/4/f/f/mi-redmi-8-mzb8251in-original-imafhyacmxaefxgw.jpeg?q=70",
    productName: "mobile",
    price: "5000",
    customerRating: "4.5",
    discount: "10%",
    internalStorage: "",
    ram: "",
    screenSize: "",
    primaryCamera: "",
    secondaryCamera: "",
    processorBrand: "",
    speciality: "",
    resolutionType: "",
    operatingSystem: "",
    networkType: "",
    simType: "",
    batteryCapacty: "",
    brand: "",
    features: "",
    type: "",
    numberOfCores: "",
    discount: "",
    offers: "",
    bankOffer: "",
    availability: "",
    operatingSystemVersion: "",
    clockSpeed: "",
    imagesList: [
      "https://rukminim2.flixcart.com/image/416/416/k1fbmvk0/mobile/4/f/f/mi-redmi-8-mzb8251in-original-imafhyacvweh9gxf.jpeg",
      "https://rukminim2.flixcart.com/image/416/416/k1fbmvk0/mobile/4/f/f/mi-redmi-8-mzb8251in-original-imafhyacng8eqqwb.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/416/416/k1fbmvk0/mobile/4/f/f/mi-redmi-8-mzb8251in-original-imafhyacqsf5fktx.jpeg?q=70&crop=false",
    ],
    details: [
      "4 GB RAM | 128GB ROM | Expandabale Upto 1500 GB",
      "17.02 cm (6.7 inch) HD+ Display",
      "50MP + 2MP | 8MP Front Camera",
      "5000mAh Battery",
      "Dimensity 6300 Processor",
      "1 Year Manufacturer Warranty For Device and 6 Months for in-BoxAccessories",
    ],
  };

  useEffect(() => {
    productData();
  }, []);

  const productData = async () => {
    const res = await fetch("http://localhost:3000/product");
    const result = await res.json();
    useProductDataList(result);
    //console.log(result);
  };

  return (
    <div className="md:px-5 md:flex md:gap-3">
      {/* ---------------Left Side---------------------- */}
      <div className="hidden md:h-100 md:border-3 md:w-75 md:px-5 md:block">
        <div>
          <h2 className="font-bold text-xl">Filters</h2>
        </div>
      </div>
       
      {/* -----------------------Right Side---------------------- */}
      <div className="grid grid-cols-1">
      {productDataList?.map((data) => (
        <ProductCard data={data}/>
        
      ))}
      </div>
    
    </div>
  );
};

export default Product;
