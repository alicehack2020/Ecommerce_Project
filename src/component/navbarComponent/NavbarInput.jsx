import React from "react";
import Search from "../../assets/images/search.png";
import { useNavigate } from "react-router";

const NavbarInput = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="flex border border-blue-400 rounded-xl items-center md:bg-blue-100 md:flex md:gap-1 md:px-4 md:rounded-lg px-3">
        <img
          src={Search}
          alt="Search"
          className="flex w-5 items-center object-contain"
        />
        <input
          onKeyDown={(e) =>
            e.key == "Enter"
              ? navigate(`/product/laptop
              `)
              : ""
          }
          type="text"
          placeholder="Search for Products Brands and More"
          className="h-10 w-full outline-0 px-2"
        />
      </div>
    </>
  );
};

export default NavbarInput;
