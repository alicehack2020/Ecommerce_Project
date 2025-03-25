import React, { useState } from "react";
import User from "../../assets/images/user.png";

const userList = [
  {
    key: 1,
    icon: User,
    label: "My Profile",
  },
  {
    key: 2,
    icon: User,
    label: "SuperCoin Zone",
  },
  {
    key: 3,
    icon: User,
    label: "SuperCoin Zone",
  },
  {
    key: 4,
    icon: User,
    label: "SuperCoin Zone",
  },
];

const NavbarUser = () => {
  const [hidden, setHidden] = useState();

  return (
    <>
      <div
        onMouseEnter={() => setHidden(true)}
        className="flex p-2 rounded-sm text-lg cursor-pointer gap-1 hover:bg-gray-200 items-center md:flex md:gap-2 relative"
      >
        <img src={User} alt="user" className="w-6" />
        <span className="md:md xs">Vijay</span>
      </div>

      {/* showing on hover */}
      {hidden ? (
        <div className="bg-white shadow-2xl w-60 absolute cursor-pointer py-4 top-16 z-3">
          {userList.map((user) => (
            <div
              onClick={() => setHidden(false)}
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
