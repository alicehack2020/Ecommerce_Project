import React, { useContext } from "react";
import { Context } from "../../App";

const CheckOutInfo = ({ item }) => {
  // console.log("item : ", item);

  const { deleteHandler, updateHandler } = useContext(Context);

  // console.log("data : ", data);
  // console.log("item : ", item);

  const quntityHandler = (event) => {
    // console.log(event.target.value);
    // updateHandler(event.target.value);

    // const quantityStore = event.target.value;
    // updateHandler(quantityStore);

    const { value } = event.target;
    updateHandler(value, item.id);
  };

  return (
    // left and right side info container
    <div className="md:py-5 md:px-10">
      <div className="md:flex md:gap-16 md:px-10">
        {/* left side - info*/}
        <div className="">
          <div className="flex  md:flex md:gap-6 md:w-full px-2 md:px-0">
            <div>
              {/* phone image */}
              <div className="flex justify-center py-3 md:py-0">
                <img
                  src={item?.image}
                  alt=""
                  className="w-14 h-20  md:pb-1 items-center md:w-16 md:h-auto  md:object-cover"
                />
              </div>

              {/* select quantity */}
              <select
                onChange={quntityHandler}
                defaultValue={item?.quntity}
                className="border border-gray-300 py-2 px-2 w-max text-xs mt-2 cursor-pointer outline-0"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={Number("6")}>6</option>
              </select>
            </div>

            {/* poco m6 information*/}
            <div className="px-3 py-3 md:py-0">
              <h3 className="font-semibold text-sm md:text-md">
                POCO M6 Plus 5G (Misty Lavender, 128 GB)
              </h3>
              <p className="text-gray-500 font-semibold text-sm md:text-md">
                6 GB RAM
              </p>
              <p className="text-gray-500 text-sm md:text-md">
                Seller: GRAHGOODS RETAIL
              </p>
              <p className="text-sm md:text-md">
                <span className="text-gray-500 line-through">
                  <span>&#8377;</span>
                  {item?.price}
                </span>
                <span className="font-semibold text-sm md:text-lg">
                  {" "}
                  {item?.price * item?.quntity}
                </span>
                <span className="text-green-700 font-semibold"> 31% Off</span>
              </p>
              <p className="text-gray-500 text-sm md:text-md">
                + <span>59</span> Secured Packaging Fee
              </p>
            </div>
          </div>

          {/* Remove Button */}
          <div className="border border-gray-300 font-semibold text-center md:w-max ml-auto mb-3 md:mb-0 mr-auto px-4 py-3 mt-5 cursor-pointer hover:text-blue-700">
            <button
              className="cursor-pointer text-xs md:text-md"
              onClick={() => deleteHandler(item?.id)}
            >
              REMOVE
            </button>
          </div>
        </div>

        {/* right side - info*/}
        <p className="md:w-max px-3 text-sm md:text-md">
          <span className="text-gray-500">Delivery by Tue Mar 11 | </span>
          <span className="line-through text-gray-500">
            <span>&#8377;</span>40
          </span>
          <span className="text-green-500"> Free</span>
        </p>
      </div>
      {/* place order button */}
      <div className=" font-semibold cursor-pointer  text-center md:w-56 ml-auto mr-auto px-4 py-3 md:rounded-sm bg-amber-600 text-white mt-10">
        <button className="text-xs md:text-[16px] cursor-pointer">
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

export default CheckOutInfo;
