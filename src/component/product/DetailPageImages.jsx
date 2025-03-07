import React from "react";

const DetailPageImages = ({ productDetailImageList }) => {
  console.log("productDetailImageList====", productDetailImageList);

  return (
    <>
      <div className="cursor-pointer flex md:flex-col">
        {productDetailImageList?.map((imaList) => (
          <div className="w-14 pb-2">
            <img
              src={imaList}
              alt=""
              className="border w-full object-cover py-2 px-1 "
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default DetailPageImages;
