import React from "react";
import { aimData } from "@/lib/data";
import Image from "next/image";

const Aim = () => {
  return (
    <section className="lg:py-25 px-4 py-4">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-6 ">
          {aimData.map((item, index) => (
            <div
              key={index}
              className="bg-background_brand p-6 flex flex-col justify-between h-full rounded-[16px]"
            >
              <div className="flex flex-col gap-1">
                <span className="text-base bg-white w-fit text-body-text_brand px-4 py-1 rounded-[30px] mb-4">
                  {item.subtitle}
                </span>

                <h1 className="text-[20px] font-semibold text-title_brand">
                  {item.title}
                </h1>

                <p className="text-body_text text-base font-normal mt-2">
                  {item.description}
                </p>
              </div>

              <div className="mt-6  flex justify-center aspect-4/3 ">
                <Image
                  src={item.image}
                  alt="aim image"
                  className="w-full h-full  object-cover rounded-[16px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aim;
