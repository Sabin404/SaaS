import Image from "next/image";
import company from "../../assets/company.png";
import React from "react";

const Company = () => {
  return (
    <section className="py-25">
      <div className="container flex items-center justify-between gap-16">
        <div>
          <Image
            src={company}
            width={603}
            height={491}
            alt="company"
            className="object-cover mr-21.25"
          />
        </div>

        <div className="flex-1 h-[701px] bg-background_brand p-8 rounded-[16px] flex flex-col justify-between">
          <div className="pb-29.5">
            <h1 className="text-[32px] font-semibold leading-[130%]">
              Our company
            </h1>

            <p className="mt-4 text-[18px] font-semibold leading-[160%]">
              We are a technology-driven company dedicated to solving real
              operational challenges faced by retailers and online sellers.
            </p>

            <p className="mt-4 font-normal leading-[160%] text-gray-700">
              The commerce landscape is evolving rapidly, and businesses need
              tools that are accurate, scalable, and easy to use. Our platform
              provides a unified system that connects every part of the selling
              process, ensuring data consistency and operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-white_brand p-4 rounded-[8px] text-center">
            <div>
              <h1 className="text-[36px] font-bold text-secondary_brand">
                98%
              </h1>
              <p className="font-medium">Reduction in manual stock errors</p>
            </div>

            <div>
              <h1 className="text-[36px] font-bold text-secondary_brand">
                3x Faster
              </h1>
              <p className="font-medium">Order processing with automation</p>
            </div>

            <div>
              <h1 className="text-[36px] font-bold text-secondary_brand">
                5-7 hour
              </h1>
              <p className="font-medium">
                Average daily time saved per business
              </p>
            </div>

            <div>
              <h1 className="text-[36px] font-bold text-secondary_brand">
                70%
              </h1>
              <p className="font-medium">Increase in operational accuracy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
