import React, { useEffect, useState } from "react";
import Incre from "../../assets/images/carousal/increment.png";
import Decre from "../../assets/images/carousal/decrement.png";
import Img1 from "../../assets/images/carousal/img1.png";
import Img2 from "../../assets/images/carousal/img2.png";

const Crousal = () => {
  const [count, setCount] = useState(0);

  // const arrList = ["index-0", "index-1", "index-2", "index-3"];
  const arrList = [Img1, Img2];
  // console.log("arrList : ", arrList);

  const incrementHandler = () => {
    if (count == arrList.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  const decrementHandler = () => {
    if (count == 0) {
      setCount(arrList.length - 1);
    } else {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      incrementHandler();
    }, 2000);
    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <>
      <div className="border relative">
        <img
          src={arrList[count]}
          alt=""
          className="w-full h-36 md:h-60 object-fit-cover"
        />

        <div className="md:h-40 w-full flex justify-between">
          <button
            onClick={incrementHandler}
            className="flex items-center justify-center bg-white  h-10 w-5 md:h-20 md:w-10 md:rounded-sm absolute top-14 md:left-0 md:top-24 cursor-pointer"
          >
            <img src={Decre} alt="" className="w-2 h-2 md:w-3" />
          </button>
          <button
            onClick={decrementHandler}
            className="flex justify-center items-center cursor-pointer bg-white h-10 w-5 md:h-20 md:w-10 rounded-sm absolute top-14 right-0 md:right-0 md:top-24"
          >
            <img src={Incre} alt="" className="w-2 h-2 md:w-3" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Crousal;
