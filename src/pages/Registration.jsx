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
        <div className=" md:w-[50%]  md:flex md:m-auto">
          {/* Left Side */}
          <div className=" bg-blue-500 md:w-96 md:px-8 md:py-8 hidden md:block">
            <h1 className="text-3xl text-white font-bold">Login</h1>
            <p className="text-lg text-gray-200 mt-10">
              Get access to your Orders
            </p>
            <p className="text-lg text-gray-200">
              Wishlist and Recommendations
            </p>
            <div className="pt-50">
              <img
                className=" flex content-center ml-auto mr-auto "
                src="data:image/jpeg;base64,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"
                alt="cat Image"
              />
            </div>
          </div>

          {/* Rigth Side */}
          <div className="bg-white md:px-10 md:py-10 md:w-full">
            <div className="px-5 md:px-0">
              {/* input box */}
              <div className="pb-5 pt-5 md:pt-0">
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Name"
                  value={inputValue.username}
                  onChange={handleChange}
                  className="border outline-none w-full h-10 px-5"
                />
              </div>

              <div className="pb-5">
                <input
                  type="email"
                  name="useremail"
                  placeholder="Enter Email"
                  value={inputValue.useremail}
                  onChange={handleChange}
                  className="border outline-none w-full h-10 px-5"
                />
              </div>

              <div className="pb-5">
                <input
                  type="password"
                  name="userpassword"
                  placeholder="Enter pasword"
                  value={inputValue.userpassword}
                  onChange={handleChange}
                  className="border outline-none w-full h-10 px-5"
                />
              </div>

              {/* radio */}
              <div className="pb-4 px-2 md:px-0 text-sm md:text-md">
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
              <div className="flex gap-2 pb-5 text-sm md:text-md">
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
                className=" w-full md:border border outline-none"
              >
                {contryList.map((item, index) => (
                  <option key={index} name="selectOption" value={item.country}>
                    {item.country}
                  </option>
                ))}
              </select>
            </div>

            {/* create account */}
            <div className="my-40 text-center">
              <button className="bg-blue-300 px-5 py-2 rounded-3xl text-white font-bold">
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
