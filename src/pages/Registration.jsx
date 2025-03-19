import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const contryList = [
  { country: "India" },
  { country: "America" },
  { country: "China" },
  { country: "Japan" },
];

const Registration = () => {
  const [check, setCheck] = useState(false);

  const [inputValue, setInputValue] = useState({
    username: "",
    useremail: "",
    userpassword: "",
    gender: "",
    isTermSelected: false,
    selectOption: "",
  });
  let navigate = useNavigate();
  console.log(inputValue);

  const handleChange = (event) => {
    const { name, value, checked } = event.target;

    if (name === "isTermSelected") {
      setInputValue({ ...inputValue, isTermSelected: checked });
    } else {
      setInputValue((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const logHandler = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="bg-gray-200   md:w-full md:h-auto md:px-5 md:py-4">
        <div className=" md:w-[70%]  md:flex md:m-auto">
          {/* Left Side */}
          <div className=" bg-blue-500 md:w-[60%] md:px-8 md:py-8 hidden md:block">
            <h1 className="text-3xl text-white font-bold">Registration</h1>
            <p className="text-lg text-gray-200 mt-10">
              Get access to your Orders
            </p>
            <p className="text-lg text-gray-200">
              Wishlist and Recommendations
            </p>
          </div>

          {/* Rigth Side */}
          <div className="bg-white md:px-10 md:py-10 md:w-full">
            <div className="px-5 md:px-0 space-y-4">
              {/* input box */}
              <div className="  md:pt-0">
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Name"
                  value={inputValue.username}
                  onChange={handleChange}
                  className="border border-t-0 border-x-0 outline-0 border-b-gray-300  w-full h-10 px-5  focus:border-b-blue-600"
                />
              </div>

              <div className="">
                <input
                  type="email"
                  name="useremail"
                  placeholder="Enter Email"
                  value={inputValue.useremail}
                  onChange={handleChange}
                  className="border border-t-0 border-x-0 outline-0 border-b-gray-300  w-full h-10 px-5  focus:border-b-blue-600"
                />
              </div>

              <div className="">
                <input
                  type="password"
                  name="userpassword"
                  placeholder="Enter pasword"
                  value={inputValue.userpassword}
                  onChange={handleChange}
                  className="border border-t-0 border-x-0 outline-0 border-b-gray-300  w-full h-10 px-5  focus:border-b-blue-600"
                />
              </div>

              {/* radio */}
              <div className=" px-2 md:px-0 text-sm md:text-md">
                <div className="flex gap-4 ">
                  Male :
                  <input
                    type="radio"
                    name="gender"
                    value={"male"}
                    onChange={handleChange}
                  />
                  Female :
                  <input
                    type="radio"
                    name="gender"
                    value={"female"}
                    onChange={handleChange}
                  />
                  Other :
                  <input
                    type="radio"
                    name="gender"
                    value={"other"}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* terms and conditions */}
              <div className="flex gap-2  text-sm md:text-md">
                <input
                  type="checkbox"
                  name="isTermSelected"
                  checked={inputValue.checked}
                  onChange={handleChange}
                />
                <label>I agree to Terms of Service : </label>
              </div>

              {/* select options */}
              <select
                autoFocus
                name="selectOption"
                onChange={handleChange}
                className=" w-[80%] md:w-full md:border border-gray-300 outline-none"
              >
                {contryList.map((item, index) => (
                  <option
                    className=""
                    key={index}
                    name="selectOption"
                    value={item.country}
                  >
                    {item.country}
                  </option>
                ))}
              </select>
            </div>

            {/* create account */}
            <div className="my-3 text-center">
              <button className="text-center bg-orange-600 text-white py-2 cursor-pointer px-3 w-full font-semibold">
                Create An Account
              </button>
              <div
                className="pt-2 cursor-pointer text-blue-600 font-bold"
                onClick={logHandler}
              >
                Login ?
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
