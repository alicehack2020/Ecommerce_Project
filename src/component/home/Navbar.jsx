import React, { useState } from "react";
import Flipcart from "../../assets/images/flipkart.png";

import User from "../../assets/images/user.png";
import downArrow from "../../assets/images/down-arrow.png";
import Cart from "../../assets/images/cart.png";
import Shop from "../../assets/images/shop.png";
import NavbarInput from "../navbarComponent/NavbarInput";
import NavbarUser from "../navbarComponent/NavbarUser";
import NavbarCart from "../navbarComponent/NavbarCart";
import Menu from "../../assets/images/menu.png";

const Navbar = () => {
  return (
    <div className="md:bg-white md:flex md:gap-10 md:px-10 md:shadow-2xl md:w-full">
      {/* ----------left side--------------- */}
      <div className="w-full items-center md:flex md:gap-6 md:w-[55%]">
        {/* flipkart plus */}
        <div className="flex justify-between">
          <div className="flex items-center">
            <img src={Menu} alt="Menu" className="w-6 block md:hidden" />

            <div>
              <img src={Flipcart} alt="Flipkart" className="w-40 md:w-30" />
            </div>
          </div>

          <div className="flex items-center">
            {/* NavbarUser ---for mobile-----*/}
            <div className="block md:hidden">
              <NavbarUser />
            </div>
            {/* NavbarCart----for mobile */}
            <div className="block md:hidden">
              <NavbarCart />
            </div>
          </div>
        </div>

        {/* NavbarInput ---for desktop----- */}
        <div className="hidden md:block md:w-full">
          <NavbarInput />
        </div>
      </div>
      {/*NavbarInput ----------for mobile----------- */}
      <div className="w-full block md:hidden md:w-full">
        <NavbarInput />
      </div>

      {/* -------------Right side---------- */}
      <div className="flex w-[45%] gap-10 items-center">
        {/* NavbarUser ---for desktop-----*/}
        <div className="hidden md:block">
          <NavbarUser />
        </div>

        {/* NavbarCart----for desktop */}
        <div className="hidden md:block">
          <NavbarCart />
        </div>

        {/* Become a seller */}
        <div className="text-lg cursor-pointer gap-2 hidden md:flex px-2">
          <img src={Shop} alt="shop" className="w-6" />
          <span>Become a Seller</span>
        </div>
        {/* notification */}
        <div className="cursor-pointer hidden hover:bg-gray-100 md:block md:p-2">
          |
        </div>
      </div>
    </div>
  );
};

export default Navbar;
