import React, { useState } from "react";
import Rine from "../../assets/images/category/rine.png";
import downArrow from "../../assets/images/down-arrow.png";

const catogoryList = [
  { id: 1, icon: Rine, label: "Kilos" },
  { id: 2, icon: Rine, label: "Mobile" },
  {
    id: 3,
    icon: Rine,
    label: "Fashion",
    isCategory: true,
    listItems: [
      { id: 1, label: "Men's Top Wear" },
      { id: 2, label: "Men's Bottom Wear" },
      { id: 3, label: "Women Ethnic" },
      { id: 4, label: "Men Footwear" },
      { id: 5, label: "Women Footwear" },
    ],
  },
  {
    id: 4,
    icon: Rine,
    label: "Electronics",
    isCategory: true,
    listItems: [
      { id: 1, label: "Men's Top Wear" },
      { id: 2, label: "Men's Bottom Wear" },
      { id: 3, label: "Women Ethnic" },
      { id: 4, label: "Men Footwear" },
      { id: 5, label: "Women Footwear" },
    ],
  },
  { id: 5, icon: Rine, label: "Home & Furniture" },
  { id: 6, icon: Rine, label: "Appliances" },
  { id: 7, icon: Rine, label: "Flight Bookings" },
  {
    id: 8,
    icon: Rine,
    label: "Beauty, Toys & More",
    isCategory: true,
    listItems: [
      { id: 1, label: "Men's Top Wear" },
      { id: 2, label: "Men's Bottom Wear" },
      { id: 3, label: "Women Ethnic" },
      { id: 4, label: "Men Footwear" },
      { id: 5, label: "Women Footwear" },
    ],
  },
  {
    id: 9,
    icon: Rine,
    label: "Two Wheelers",
    isCategory: true,
    listItems: [
      { id: 1, label: "Men's Top Wear" },
      { id: 2, label: "Men's Bottom Wear" },
      { id: 3, label: "Women Ethnic" },
      { id: 4, label: "Men Footwear" },
      { id: 5, label: "Women Footwear" },
    ],
  },
];

const CategoryComponent = () => {
  const CategoryCard = ({ list }) => {
    //console.log("a", list.listItem);

    const [isMenu, setIsMenu] = useState(false);
    return (
      <>
        <div className="flex flex-col items-center md:hover:bg-gray-100 md:px-2 md:py-2 md:relative">
          <img src={list.icon} alt="Rean Powder" className="w-12 md:w-16" />
          <div
            onClick={() => setIsMenu(!isMenu)}
            className="text-gray-500 hidden items-center md:flex md:font-bold md:gap-1"
          >
            <p>{list.label}</p>{" "}
            {list.isCategory && (
              <div className="w-4">
                <img
                  src={downArrow}
                  alt=""
                  className={`${isMenu ? "rotate-180" : ""}`}
                />
              </div>
            )}
          </div>
          <div className="text-center w-full">
            <p className="text-xs block md:hidden md:text-md truncate">
              {list.label}
            </p>
          </div>
        </div>
        {/* sub-category */}

        {list.isCategory && isMenu && (
          <div className="md:absolute md:bg-white md:mb-3 md:w-52">
            {list?.listItems?.map((listItem, index) => {
              // console.log(listItem);
              return (
                <div
                  key={index}
                  className="md:hover:bg-blue-100 md:items-center md:px-4 md:py-2"
                  onClick={() => setIsMenu(false)}
                >
                  {listItem.label}
                </div>
              );
            })}
          </div>
        )}
      </>
    );
  };

  return (
    <div className="grid grid-cols-4 md:bg-white md:cursor-pointer md:flex md:justify-evenly md:mt-3 md:py-3 md:shadow-2xl md:w-full">
      {catogoryList.map((list, index) => (
        // CagegoryCard
        <div key={index} className="mx-1 my-1">
          <CategoryCard list={list} />
        </div>
      ))}
    </div>
  );
};

export default CategoryComponent;
