import React from "react";
import CheckOutAddress from "../component/checkoutComponent/CheckOutAddress";
import CheckOutInfo from "../component/checkoutComponent/CheckOutInfo";
import CheckOutPriceDetails from "../component/checkoutComponent/CheckOutPriceDetails";

const CheckOutPage = () => {
  return (
    //main container
    <div className="md:flex gap-4 md:px-10 bg-gray-100 ">
      {/* left side */}
      <div className="bg-white mb-5">
        <CheckOutAddress />

        <CheckOutInfo />
      </div>

      {/* right side */}
      <div className="bg-white md:px-5 mb-5">
        <CheckOutPriceDetails />
      </div>
    </div>
  );
};

export default CheckOutPage;
