import React, { useEffect, useState } from "react";

const CustomerRating = ({ customerRatingHandling }) => {
  const [storeCustomeValue, setStoreCustomeValue] = useState({
    check1: "",
    check2: "",
    check3: "",
    check4: "",
  });

  const customRatingHandler = (event) => {
    const { value, name, checked } = event.target;
    customerRatingHandling(value);
    if (checked) {
      setStoreCustomeValue({ ...storeCustomeValue, [name]: value });
    } else {
      setStoreCustomeValue({ ...storeCustomeValue, [name]: "" });
    }
  };

  useEffect(() => {
    customerRatingHandling(Object.values(storeCustomeValue));
  }, [storeCustomeValue]);

  // console.log("storeCustomeValue", storeCustomeValue);

  return (
    <div>
      <h4>CustomerRating</h4>
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
      </div>
    </div>
  );
};

export default CustomerRating;
