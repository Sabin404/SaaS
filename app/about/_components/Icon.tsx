import React from "react";
import Aicene from "../../assets/aicene.png";
import DressNepal from "../../assets/dressnepal.png";
import GifyPoint from "../../assets/giftypoint.png";
import NaturalWears from "../../assets/naturalwears.jpg";
import OrganicWear from "../../assets/organicwear.png";
import YHH from "../../assets/YHH.png";
import Image from "next/image";
const Icon = () => {
  const images = [
    DressNepal,
    YHH,
    OrganicWear,
    GifyPoint,
    NaturalWears,
    Aicene,
    OrganicWear,
    GifyPoint,
    NaturalWears,
    Aicene,
  ];
  return (
    <section className="relative ">
      <div className="container text-center lg:pt-15 z-50">
        <div>
          <h1 className="lg:text-[20px] pt-4 lg:pt-0 font-semibold leading-[160%] ">
            Trusted by Businesses Worldwide
          </h1>
        </div>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide lg:mt-6 mt-2">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Image ${index}`}
              className="lg:w-40 lg:h-32 w-30 h-25 object-contain px-4 lg:px-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Icon;
