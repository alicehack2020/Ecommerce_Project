import React, { useState } from "react";

const stateList = [
  { localState: "Maharashtra" },
  { localState: "Goa" },
  { localState: "Gujrat" },
  { localState: "Hydrabad" },
];

const AddressPage = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    mobileNumber: "",
    pinCode: "",
    locality: "",
    address: "",
    addressType: "",
    city: "",
    selectOption: "",
    Landmark: "",
    alternatePhoneNumber: "",
    isTermSelected: false,
  });

  // console.log("inputValue", inputValue);

  const inputChangeHandler = (event) => {
    const { name, value, checked } = event.target;

    if (name === "isTermSelected") {
      setInputValue({ ...inputValue, isTermSelected: checked });
    } else {
      //  inputValue as prevState
      setInputValue((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const submitHandle = async () => {
    // console.log("Hello");
    const userDetail = JSON.parse(localStorage.getItem("userDetails"));
    // console.log("userDetail", userDetail.id);

    const response = await fetch(
      `http://localhost:3000/users/${userDetail.id}`,
      {
        method: "PATCH",
        body: JSON.stringify(inputValue),
      }
    );
    const result = await response.json();
    console.log("result", result);
  };

  return (
    <>
      <div className="bg-blue-50 px-10 py-5">
        <div className="space-y-4 md:w-[50%]">
          {/* 1st */}
          <div className="flex gap-5">
            <input
              type="text"
              className="border text-sm md:text-md px-3 py-2 w-full outline-0 focus:border-blue-600 border-gray-400 bg-white"
              placeholder="Name"
              value={inputValue.name}
              name="name"
              onChange={inputChangeHandler}
            />
            <input
              type="text"
              className="border px-3 text-sm md:text-md py-2 w-full outline-0 focus:border-blue-600 border-gray-400 bg-white"
              placeholder="10-digit mobile number"
              value={inputValue.mobileNumber}
              name="mobileNumber"
              onChange={inputChangeHandler}
            />
          </div>
          {/* 2nd */}
          <div className="flex gap-5">
            <input
              type="text"
              className="border px-3 text-sm md:text-md py-2 w-full outline-0 focus:border-blue-600 border-gray-400 bg-white"
              placeholder="Pincode"
              value={inputValue.pinCode}
              name="pinCode"
              onChange={inputChangeHandler}
            />
            <input
              type="text"
              className="border px-3 text-sm md:text-md py-2 w-full outline-0 focus:border-blue-600 border-gray-400 bg-white"
              placeholder="Locality"
              value={inputValue.locality}
              name="locality"
              onChange={inputChangeHandler}
            />
          </div>
          {/* adddress */}
          <input
            type="text"
            placeholder="Address"
            value={inputValue.address}
            name="address"
            onChange={inputChangeHandler}
            w-full
            className="border px-3 text-sm md:text-md py-2 w-full outline-0 focus:border-blue-600 border-gray-400 bg-white h-24"
          />
          <div className="flex gap-5">
            <input
              type="text"
              className="border px-3 text-sm md:text-md py-2 w-full outline-0 focus:border-blue-600 border-gray-400 bg-white"
              placeholder="City/District/Town"
              value={inputValue.city}
              name="city"
              onChange={inputChangeHandler}
            />
            <select
              name="selectOption"
              value={inputValue.selectOption}
              onChange={inputChangeHandler}
              id=""
              className="border px-3 text-sm md:text-md py-2 w-full outline-0 focus:border-blue-600 border-gray-400 bg-white"
            >
              {stateList.map((statesName, index) => (
                <option
                  name="selectOption"
                  key={index}
                  value={statesName.localState}
                >
                  {statesName.localState}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-5">
            <input
              type="text"
              className="border px-3 text-sm md:text-md py-2 w-full outline-0 focus:border-blue-600 border-gray-400 bg-white"
              placeholder="Landmark"
              value={inputValue.Landmark}
              name="Landmark"
              onChange={inputChangeHandler}
            />
            <input
              type="text"
              className="border px-3 text-sm md:text-md py-2 w-full outline-0 focus:border-blue-600 border-gray-400 bg-white"
              placeholder="Alternate Phone Number"
              value={inputValue.alternatePhoneNumber}
              name="alternatePhoneNumber"
              onChange={inputChangeHandler}
            />
          </div>
          {/* address type */}
          <div className="py-5">
            <p className="text-xs text-gray-500 pb-3">Address Type</p>
            <div className="flex gap-10">
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="addressType"
                  className="cursor-pointer text-sm md:text-md"
                  value={inputValue.addressType}
                  onChange={inputChangeHandler}
                />
                <span className="md:text-md text-sm">
                  Home (All day delivary )
                </span>
              </div>
              <div className="flex gap-2 ">
                <input
                  type="radio"
                  name="addressType"
                  className="cursor-pointer text-sm md:text-md"
                  value={inputValue.addressType}
                  onChange={inputChangeHandler}
                />
                <span className="md:text-md text-sm">
                  Work (Delivary between 10 AM - 5 PM)
                </span>
              </div>
            </div>
          </div>
          {/* buttons */}
          <div className="cursor-pointer flex gap-5">
            <button
              onClick={submitHandle}
              className="px-8 py-3 bg-orange-400 md:text-md text-sm text-white font-semibold rounded-xs cursor-pointer"
            >
              SAVE AND DELIVARY HERE
            </button>
            <button className="text-blue-700 font-semibold cursor-pointer md:text-md text-sm">
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressPage;
