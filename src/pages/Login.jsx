import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    useremail: "",
    userpassword: "",
  });

  const [isBorder, setIsBorder] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const navigate = useNavigate();

  const existingUserHandler = () => {
    navigate("/registration");
  };

  const loginHandler = () => {
    console.log(inputValue);
  };

  return (
    <>
      <div className="md:flex md:m-auto md:w-[60%] md:mt-5">
        {/* Left Side */}
        <div className="bg-blue-500 w-full md:w-[70%] md:px-8 md:py-8 hidden md:block">
          <h1 className="text-3xl text-white font-bold">Login</h1>
          <p className="text-lg text-gray-100 mt-10">
            Get access to your Orders,
          </p>
          <p className="text-lg text-gray-100">Wishlist and Recommendations</p>
        </div>

        {/* Rigth Side */}
        <div className="bg-white px-10 py-10 w-full">
          <div className="pb-5">
            <input
              type="email"
              name="useremail"
              placeholder="Enter Email"
              value={inputValue.useremail}
              onChange={handleChange}
              className={
                "border border-t-0 border-x-0 outline-0 border-b-gray-300  w-full md:w-full h-10 px-5 focus:border-b-blue-600"
              }
            />
          </div>

          <div className="pb-7">
            <input
              type="password"
              name="userpassword"
              placeholder="Enter pasword"
              value={inputValue.userpassword}
              onChange={handleChange}
              className={
                "border border-t-0 border-x-0 outline-0 border-b-gray-300  w-full md:w-full h-10 px-5 focus:border-b-blue-600"
              }
            />
          </div>
          <div className="text-center bg-orange-600 text-white py-2 cursor-pointer">
            <button
              onClick={loginHandler}
              className="cursor-pointer font-semibold"
            >
              Login
            </button>
          </div>

          <div className="my-10 md:my-40 text-center text-blue-500 font-bold">
            <span className="cursor-pointer" onClick={existingUserHandler}>
              Existing User
            </span>{" "}
            ?
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
