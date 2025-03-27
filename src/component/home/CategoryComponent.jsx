import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const CategoryComponent = () => {
  const [catogoryList, setCatogoryList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/catogoryList");
      const result = await response.json();
      setCatogoryList(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-4 md:bg-white md:cursor-pointer md:flex md:justify-evenly md:mt-3 md:py-3 md:shadow-2xl md:w-full">
      {catogoryList?.map((list) => (
        <div key={list.id} className="mx-1 my-1">
          <CategoryCard list={list} />
        </div>
      ))}
    </div>
  );
};

export default CategoryComponent;
