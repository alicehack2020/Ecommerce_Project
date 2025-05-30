import React, { useState } from "react";

const TabFilter = ({ tabHandler }) => {
  const [tab, setTab] = useState();

  const handleTab = (data) => {
    setTab(data);
    tabHandler(data);
  };

  const list = [
    // {
    //   id: 1,
    //   value: "Popularity",
    //   label: "Popularity",
    // },
    {
      id: 2,
      value: "lowToHigh",
      label: " Price - Low to High",
    },
    {
      id: 3,
      value: "highToLow",
      label: " Price - High to Low",
    },

    // {
    //   id: 4,
    //   value: "newest",
    //   label: "Newest First",
    // },
  ];

  return (
    <div className=" flex gap-3 pb-2">
      {list.map((item) => (
        <button
          key={item.id}
          onClick={() => handleTab(item.value)}
          className={`${
            tab == item.value
              ? "text-blue-500 border-b border-solid font-semibold"
              : "text-gray-500 "
          } font-semibold  px-3  py-1`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default TabFilter;
