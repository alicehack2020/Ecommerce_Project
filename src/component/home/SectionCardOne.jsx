import React, { useEffect, useState } from "react";
import CardOne from "./CardOne";
import Img1 from "../../assets/images/cardOne/img1.png";
import { useNavigate } from "react-router";

const SectionCardOne = () => {
  const [sectionCardOne, setSectionCardOne] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/SectionCardOneList");
    const result = await res.json();
    // console.log("result : ", result);

    setSectionCardOne(result);
  };

  return (
    <>
      {sectionCardOne.map((list) => (
        <div key={list.id} className="bg-white py-3">
          <h1 className="font-semibold text-xl md:text-lg py-4">{list.name}</h1>
          <div className="md:flex md:gap-4 gap-x-2 grid grid-cols-2 gap-y-2 bg-white">
            {list.itemList.map((cardOneList) => (
              <div
                key={cardOneList.id}
                className="w-full border border-gray-300 shadow-xl"
                onClick={() => navigate(`/product/${list.type}`)}
              >
                <CardOne cardOneListPro={cardOneList} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default SectionCardOne;
