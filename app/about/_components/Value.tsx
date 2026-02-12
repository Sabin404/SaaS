import React from "react";
import { valueData } from "@/lib/data";

const Value = () => {
  return (
    <section className="lg:py-16 px-4 py-4 bg-primary_brand lg:bg-white_brand">
      <div className="container">
        <div className="lg:flex gap-6">
          {/* desktop ko lagi */}
          <div className=" hidden bg-primary_brand max-w-[418px] h-[468px] p-8 rounded-[16px] lg:flex flex-col">
            <span className="bg-white_brand text-body-text_brand px-3 py-1 w-fit lg:mt-[22px] rounded-full text-sm font-medium">
              Our Values
            </span>

            <h1 className="text-[32px] font-bold text-white_brand mt-4 leading-[142%]">
              Building a Culture of Trust, Innovation, and Long-Term Impact
            </h1>

            <p className="text-[18px] mt-4 text-white_brand leading-[150%]">
              We believe strong values create strong products. Our foundation is
              built on transparency, customer-focused thinking, exceptional
              quality, collaborative teamwork, and a relentless drive to grow
              and improve.
            </p>
          </div>

          {/* mobile ko lagi */}

          <div className="lg:hidden block flex flex-col justify-center items-center">
            <span className="bg-white_brand text-body-text_brand px-3 py-1 w-fit lg:mt-[22px] rounded-full text-sm font-medium">
              Our Values
            </span>

            <h1 className="lg:text-[32px] text-[20px] font-bold text-white_brand mt-4 leading-[142%] lg:text-start text-center">
              Building a Culture of Trust, Innovation, and Long-Term Impact
            </h1>

            <p className="text-[14px] mt-4 text-white_brand leading-[150%] mb-6 lg:text-start text-center">
              Smart tools, seamless integrations, and <br /> real-time insights
              designed to help your business run better.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:gap-6 flex-1">
            {valueData.map((item, index) => (
              <div
                key={index}
                className="p-4 lg:p-6 bg-background_brand rounded-[16px] flex flex-col gap-3 lg:gap-[14px]"
              >
                <span className="border border-primary_brand w-fit p-2 lg:p-[13px] rounded-[11px]">
                  <item.icon className="w-7 h-7 lg:w-6 lg:h-6" />
                </span>

                <p className="text-[16px] lg:text-[18px] font-semibold leading-snug">
                  {item.title}
                </p>

                <p className="text-[14px] lg:text-[16px] leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
