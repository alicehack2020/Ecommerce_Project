import React, { useEffect, useState } from "react";
import CardTwo from "./CardTwo";

const SectionCardTwo = () => {
  const [SectionCardTwo, setSectionCardTwo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/SectionCardTwoList");
    const result = await res.json();
    // console.log("result : ", result);

    setSectionCardTwo(result);
  };

  return (
    <div>
      <CardTwo lists={SectionCardTwo} />
    </div>
  );
};

export default SectionCardTwo;
