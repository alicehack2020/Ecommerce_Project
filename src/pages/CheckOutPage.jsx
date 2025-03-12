import React, { useContext } from "react";
import CheckOutAddress from "../component/checkoutComponent/CheckOutAddress";
import CheckOutInfo from "../component/checkoutComponent/CheckOutInfo";
import CheckOutPriceDetails from "../component/checkoutComponent/CheckOutPriceDetails";
import { Context } from "../App";

const CheckOutPage = () => {
  const { data } = useContext(Context);

  // console.log("data : ", data);

  return (
    //main container
    <div className="md:flex gap-4 md:px-10 bg-gray-200">
      {/* left side */}
      <div className="bg-white mb-5">
        <CheckOutAddress />

        {data?.map((item) => (
          <CheckOutInfo key={item?.id} item={item} className="bg-blue-600" />
        ))}
      </div>

      {/* right side */}
      <div className="bg-white md:px-5 mb-5">
        <CheckOutPriceDetails />
      </div>
    </div>
  );
};

export default CheckOutPage;
