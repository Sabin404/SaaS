import React from "react";
import { companyData } from "@/lib/data";
import Image from "next/image";

const Deliver = () => {
  return (
    <section className="lg:py-25 px-4 py-4  bg-white_brand lg:bg-background_brand w-full">
      <div className="container">
        <div>
          <div className="flex flex-col justify-center items-center gap-4">
            <span className="bg-white_brand lg:text-[16px] text-[14px] px-4 py-1 rounded-[30px] text-body-text_brand font-normal lg:mt-0 ">
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
          <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 lg:gap-6 gap-4  lg:mt-9">
            {companyData.map((item, index) => (
              <div
                key={index}
                className=" lg:h-full lg:bg-white_brand bg-background_brand rounded-xl p-6 flex flex-col gap-6"
              >
                <div className="lg:w-16.5 lg:h-16.5 w-[44px] h-[44px] p-[13px]  flex items-center justify-center rounded-lg border border-primary_brand text-primary_brand ">
                  <item.icon className="w-[22px] h-[22px] shrink-0" />
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
