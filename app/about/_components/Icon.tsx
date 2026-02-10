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
    <section>
      <div className="container text-center lg:pt-[60px]">
        <div>
          <h1 className="lg:text-[20px] font-semibold leading-[160%]">
            Trusted by Businesses Worldwide
          </h1>
        </div>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide mt-6">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Image ${index}`}
              className="w-40 h-32 object-contain aspect-4/3"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Icon;
