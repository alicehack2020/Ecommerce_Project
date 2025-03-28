import React, { useState } from "react";
import User from "../../assets/images/user.png";
import { useNavigate } from "react-router";

const userList = [
  {
    id: 1,
    icon: User,
    label: "My Profile",
  },
  {
    id: 2,
    icon: User,
    label: "SuperCoin Zone",
  },
  {
    id: 3,
    icon: User,
    label: "SuperCoin Zone",
  },
  {
    id: 4,
    icon: User,
    label: "Logout",
  },
];

const NavbarUser = () => {
  const [hidden, setHidden] = useState();

  const navigate = useNavigate();

  const getLocalStorageUserDetails =
    JSON.parse(localStorage.getItem("userDetails")) || [];
  // console.log("getLocalStorageUserDetails : ", getLocalStorageUserDetails);

  const user = getLocalStorageUserDetails.username
    ? getLocalStorageUserDetails.username
    : "Login";

  const loginHandler = (user) => {
    if (user == "Login") {
      navigate("/login");
    }
  };

  const logout = (label) => {
    console.log("label", label); //logout
    if (label == "Logout") {
      localStorage.clear();
    }
  };

  return (
    <>
      <div
        onMouseEnter={() => setHidden(true)}
        className="flex p-2 rounded-sm text-lg cursor-pointer gap-1 hover:bg-gray-200 items-center md:flex md:gap-2 relative"
      >
        <img src={User} alt="user" className="w-6" />
        <span className="md:md xs" onClick={() => loginHandler(user)}>
          {user}
        </span>
      </div>

      {/* showing on hover */}
      {hidden ? (
        <div className="bg-white shadow-2xl w-60 absolute cursor-pointer py-4 top-16 z-3">
          {userList.map((user) => (
            <div
              key={user.id}
              onClick={() => {
                setHidden(false);
                logout(user.label);
              }}
              className="flex gap-3 hover:bg-gray-100 px-3 py-1"
            >
              <img src={user.icon} alt="user" className="w-5" />
              <span>{user.label}</span>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default NavbarUser;
