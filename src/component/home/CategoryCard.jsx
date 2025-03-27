import React, { useState } from "react";
import { useNavigate } from "react-router";
import downArrow from "../../assets/images/down-arrow.png";

const CategoryCard = ({ list }) => {
  const [isMenu, setIsMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center md:hover:bg-gray-100 md:px-2 md:py-2 md:relative">
        <img
          onClick={() => navigate(`/product/${list.type}`)}
          src={list.icon}
          alt="Rean Powder"
          className="w-12 md:w-16"
        />
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
        <div className="md:absolute md:bg-white md:mb-3 md:w-52 z-3">
          {list?.listItems?.map((listItem) => {
            // console.log(listItem);
            return (
              <div
                key={listItem.id}
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

export default CategoryCard;
