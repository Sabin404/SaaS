import React from "react";

const Hero = () => {
  return (
    <section className="bg-linear-to-l from-[#706FBD] to-[#3A3F87] h-145 flex relative ">
      <div className="container flex  justify-between items-center">
        <div>
          <h1 className="w-[706px] text-[56px] text-white_brand font-semibold leading-[120%]">
            Empowering Modern Commerce With Reliable, Connected Solutions
          </h1>
        </div>
        <div>
          <p className="text-[24px] w-[582px] font-normal text-white_brand">
            Whether you sell online, in-store, or across multiple channels — we
            help you run your business smoothly.
          </p>
          <p className="text-[24px] mt-4 w-[582px] font-normal text-white_brand">
            Our platform is designed to simplify operations, improve efficiency,
            and support sustainable growth for businesses of all sizes.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 translate-y-17">
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
    </section>
  );
};

export default Hero;
