import React, { useEffect } from "react";

const Product = () => {
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

  const productData = () => {
    const data = fetch("");
  };

  return (
    <div className="md:px-5 md:flex md:gap-3">
      {/* Left Side */}
      <div className="hidden md:h-100 md:border-3 md:w-75 md:px-5 md:block">
        <div>
          <h2 className="font-bold text-xl">Filters</h2>
        </div>
      </div>
      {/* Right Side */}

      <div className="p-5 md:border-2 md:flex md:justify-between md:px-10 md:py-6">
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
            {data.details.map((list) => (
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

export default Product;
