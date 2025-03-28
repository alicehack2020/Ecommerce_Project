import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";

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

  const [errors, setErrors] = useState({});

  let navigate = useNavigate();
  // console.log(inputValue);

  const handleChange = (event) => {
    // console.log("event", event);

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

  const logHandler = () => {
    navigate("/login");
  };

  const validateForm = (data) => {
    console.log("data", data); //{ username: "", useremail: "", userpassword: "", gender: "", isTermSelected: false, selectOption: "" }

    if (!data.username) {
      errors.username = "Username is required";
    }
    if (!data.useremail) {
      errors.useremail = "Email useremail";
    } else if (!/\S+@\S+\.\S+/.test(data.useremail)) {
      errors.useremail = "Email is invalid";
    }
    if (!data.userpassword) {
      errors.userpassword = "Password is required";
    }
    if (!data.gender) {
      errors.gender = "Gender is required";
    }
    if (!data.isTermSelected) {
      errors.isTermSelected = "Term and Condition is required";
    }
    if (!data.selectOption) {
      errors.selectOption = "select option is required";
    }

    // console.log("errors", errors);

    return errors;
  };

  const submitHandle = async () => {
    const newErrors = validateForm(inputValue);
    setErrors({ ...newErrors });
    // newErrors.length  4 === 0 => false
    if (Object.keys(newErrors).length === 0) {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST", //POST means "send"
        body: JSON.stringify(inputValue),
      });
      const result = await response.json();
      setInputValue(result); //data set in InputValue
      toast.success("Registration Successfully..");
      localStorage.setItem("userDetails", JSON.stringify(inputValue)); //store the "inputValue" state in localStorage
      navigate("/"); //navigate to "home page"
    } else {
      // toast.error("Form submission failed due to validation errors.");
    }
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
                <p className="text-red-900">{errors?.username}</p>
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
                <p className="text-red-900">{errors?.useremail}</p>
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
                <p className="text-red-900">{errors?.userpassword}</p>
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
              <p className="text-red-900">{errors?.gender}</p>

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
              <p className="text-red-900">{errors?.isTermSelected}</p>

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
              <p className="text-red-900">{errors?.selectOption}</p>
            </div>

            {/* create account */}
            <div className="my-3 text-center">
              <ToastContainer />
              <button
                onClick={submitHandle}
                className="text-center bg-orange-600 text-white py-2 cursor-pointer px-3 w-full font-semibold"
              >
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
