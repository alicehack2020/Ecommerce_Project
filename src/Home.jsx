import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  let navigate = useNavigate();
  console.log(navigate);

  const productNavigator = () => {
    navigate("/product");
  };

  const loginNagivator = () => {
    navigate("/login");
  };

  const registrationNavigator = () => {
    navigate("/registration");
  };

  return (
    <div>
      <div className="flex justify-end w-full border">
        <div className="flex h-15 gap-3 md:gap-10  items-center px-2 md:px-5 cursor-pointer text-sm md:none">
          <div onClick={productNavigator}>Product</div>
          <div onClick={loginNagivator}>Login</div>
          <div onClick={registrationNavigator}>Registration</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
