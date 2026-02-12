import React from "react";

const Hero = () => {
  return (
    <section className="bg-linear-to-l from-[#706FBD] to-[#3A3F87] lg:h-145 flex lg:justify-center lg:items-center relative py-12 lg:py-0 px-4 py-6">
      <div className="container">
        <div className=" flex flex-col lg:flex-row justify-between items-center  gap-6 lg:gap-4">
          <div>
            <h1 className="lg:w-176.5 text-[20px] lg:text-[56px] text-white_brand font-semibold leading-[150%] lg:text-start text-center">
              Empowering Modern Commerce With Reliable, Connected Solutions
            </h1>
          </div>

          <div>
            <p className="text-[14px] lg:text-[24px] leading-[160%] lg:text-start text-center font-normal text-white_brand">
              Whether you sell online, in-store, or across multiple channels —
              we help you run your business smoothly.
            </p>

            <p className="text-[14px] lg:text-[24px] leading-[160%] mt-4 lg:text-start text-center font-normal text-white_brand">
              Our platform is designed to simplify operations, improve
              efficiency, and support sustainable growth for businesses of all
              sizes.
            </p>
          </div>
        </div>
        <div className="hidden lg:block absolute bottom-0 left-0 translate-y-25">
          <svg
            width="1726"
            height="159"
            viewBox="0 0 1726 159"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M817.195 0H0V159H1726V119.231H969.038C960.875 119.231 953.021 116.112 947.082 110.511L839.15 8.72C833.212 3.11945 825.358 0 817.195 0Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
