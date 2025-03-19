import React, { useEffect, useState } from "react";

import downArrow from "../../assets/images/down-arrow.png";

const CustomerRating = ({ customerRatingHandling }) => {
  const [storeCustomeValue, setStoreCustomeValue] = useState({
    check1: "",
    check2: "",
    check3: "",
    check4: "",
  });

  const [isCustomeRating, setIsCustomeRating] = useState(true);

  const customRatingHandler = (event) => {
    const { value, name, checked } = event.target;
    customerRatingHandling(value);
    if (checked) {
      setStoreCustomeValue({ ...storeCustomeValue, [name]: value });
    }
  };

  useEffect(() => {
    customerRatingHandling(Object.values(storeCustomeValue));
  }, [storeCustomeValue]);

  return (
    <>
      <div>
        <div
          onClick={() => setIsCustomeRating(!isCustomeRating)}
          className="cursor-pointer  text-white flex justify-between px- py-1"
        >
          <div className="text-gray-600 font-semibold w-full">
            <div className="flex justify-between items-center">
              <div className="text-black font-semibold text-sm">
                CUSTOMER RATINGS
              </div>
              <div className="w-5 h-5">
                <img
                  className={`${isCustomeRating ? "rotate-180" : ""}`}
                  src={downArrow}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {isCustomeRating && (
          <div>
            {" "}
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="check1"
                onChange={customRatingHandler}
                value={"3"}
              />
              <p>3</p>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="check2"
                onChange={customRatingHandler}
                value={"4"}
              />
              <p>4 </p>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="check3"
                onChange={customRatingHandler}
                value={"5"}
              />
              <p>5</p>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="check4"
                onChange={customRatingHandler}
                value={"6"}
              />
              <p>6</p>
            </div>{" "}
          </div>
        )}
      </div>
    </>
  );
};

export default CustomerRating;
