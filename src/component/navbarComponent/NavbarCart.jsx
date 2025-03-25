import React from "react";
import Cart from "../../assets/images/cart.png";

const NavbarCart = () => {
  return (
    <>
      <div className="text-lg cursor-pointer gap-3 md:flex px-2">
        <img src={Cart} alt="Cart" className="w-6" />
        <span className="hidden md:block">Cart</span>
      </div>
    </>
  );
};

export default NavbarCart;
