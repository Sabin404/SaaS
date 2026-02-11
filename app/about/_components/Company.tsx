import Image from "next/image";
import company from "../../assets/company.png";
import React from "react";

const Company = () => {
  return (
    <section className="lg:py-25 py-6">
      <div className="container flex lg:flex-row flex-col items-center justify-between lg:gap-16 gap-6">
        <div>
          <Image
            src={company}
            width={603}
            height={491}
            alt="company"
            className="object-cover lg:mr-21.25 px-4 lg:px-0"
          />
        </div>

        <div className="flex-1 h-auto lg:h-175.25 bg-background_brand lg:p-8 px-6 py-4 rounded-2xl flex flex-col justify-between">
          <div className="lg:pb-29.5">
            <h1 className="lg:text-[32px] text-[20px] font-semibold leading-[130%]">
              Our company
            </h1>

            <p className="mt-4 lg:text-[18px] text-[14px] font-semibold leading-[160%]">
              We are a technology-driven company dedicated to solving real
              operational challenges faced by retailers and online sellers.
            </p>

            <p className=" font-normal lg:text-[16px] text-[14px] lg:leading-[160%] leading-[150%] text-gray-700 mt-4">
              The commerce landscape is evolving rapidly, and businesses need
              tools that are accurate, scalable, and easy to use. Our platform
              provides a unified system that connects every part of the selling
              process, ensuring data consistency and operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-white_brand p-4 rounded-[8px] text-center mt-2">
            <div className="flex flex-col justify-center items-center">
              <h1 className="lg:text-[36px] text-[18px] font-bold text-secondary_brand">
                98%
              </h1>
              <p className="font-medium lg:text-[16px] text-[14px]">
                Reduction in manual stock errors
              </p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h1 className="lg:text-[36px] text-[18px] font-bold text-secondary_brand">
                3x Faster
              </h1>
              <p className="font-medium lg:text-[16px] text-[14px]">
                Order processing with automation
              </p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h1 className="lg:text-[36px] text-[18px] font-bold text-secondary_brand">
                5-7 hour
              </h1>
              <p className="font-medium lg:text-[16px] text-[14px]">
                Average daily time saved per business
              </p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h1 className="lg:text-[36px] text-[18px] font-bold text-secondary_brand">
                70%
              </h1>
              <p className="font-medium lg:text-[16px] text-[14px]">
                Increase in operational accuracy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
