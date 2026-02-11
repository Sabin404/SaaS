import React from "react";
import { companyData } from "@/lib/data";
import Image from "next/image";

const Deliver = () => {
  return (
    <section className="lg:py-25 px-4 py-4 bg-background_brand w-full">
      <div className="container">
        <div>
          <div className="flex flex-col justify-center items-center gap-4">
            <span className="bg-white_brand lg:text-[16px] text-[14px] px-4 py-1 rounded-[30px] text-body-text_brand font-normal lg:mt-0 mt-6">
              What we deliver
            </span>
            <h1 className="lg:text-[32px] text-[20px]   font-semibold leading-[120%]">
              A Centralized Platform for Modern Selling
            </h1>
            <p className="lg:text-[16px] text-sm lg:text-start text-center lg:mb-0 mb-6 font-normal text-body-text_brand">
              We bring together everything businesses need to operate
              efficiently
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:mt-9">
            {companyData.map((item, index) => (
              <div
                key={index}
                className="h-full bg-white_brand rounded-xl p-6 flex flex-col gap-6"
              >
                <div className="w-16.5 h-16.5 flex items-center justify-center rounded-lg border border-primary_brand text-primary_brand ">
                  <item.icon />
                </div>

                <h2 className="font-semibold text-[18px] ">{item.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deliver;
