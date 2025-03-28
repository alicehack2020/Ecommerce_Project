import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    useremail: "",
    userpassword: "",
  });

  const [isBorder, setIsBorder] = useState(true);

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const navigate = useNavigate();

  const existingUserHandler = () => {
    navigate("/registration");
  };

  const validationLogin = (inputData) => {
    if (!inputData.useremail) {
      errors.useremail = "User Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.useremail)) {
      errors.useremail = "User Email is invalid";
    }
    if (!inputData.userpassword) {
      errors.userpassword = "User Password is required";
    }
    return errors;
  };

  const loginHandler = async () => {
    const newError = validationLogin(inputValue);
    setErrors({ ...newError }); //desctructering

    if (Object.keys(newError).length === 0) {
      const response = await fetch("http://localhost:3000/users", {
        method: "GET", //GET meanse "get"
      });
      const result = await response.json();
      setInputValue(result); //store the result in InputValue state
      let isUserFound = false;
      let UserData = {};

      for (let i = 0; i < result.length; i++) {
        if (
          result[i].useremail == inputValue.useremail &&
          result[i].userpassword == inputValue.userpassword
        ) {
          isUserFound = true;
          UserData = result[i];
          break;
        }
      }
      if (isUserFound == true) {
        toast.success("Login Successfully..");
        localStorage.setItem("userDetails", JSON.stringify(UserData));
        navigate("/"); //to home page
      } else {
        toast.error("User Not Found..");
      }
    } else {
      // toast.error("Form submission failed due to validation errors.");
    }
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
            <p className="text-red-900">{errors?.useremail}</p>
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
            <p className="text-red-900">{errors?.userpassword}</p>
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
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
