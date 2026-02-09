"use client";

import { Button } from "@/components/ui/button";
import Product from "./../assets/product.png";
import { useState } from "react";
import Image from "next/image";

const features = [
  "Product & Inventory Management",
  "Shipping Integration",
  "POS Integration",
  "Order Management",
];

function KeyFeatures() {
  const [active, setActive] = useState(features[0]);
  const [title, setTitle] = useState("Product & Inventory Management");

  const handleClick = (item: string) => {
    setActive((prev) => (prev === item ? prev : item));
  };

  return (
    <div className="container ">
      <div className="flex flex-col items-center gap-2 lg:gap-3 text-center ">
        <span className="mt-8 lg:mt-12 w-fit bg-seller px-6 py-2 rounded-full text-hero-secondary">
          Key Features
        </span>

        <h1 className="text-xl lg:text-5xl font-semibold">
          Everything You Need to Run
          <span className="block">Your Store Smoothly</span>
        </h1>

        <p className="lg:mt-1 text-logo-text lg:text-base text-sm">
          Powerful tools that help you manage products, orders, shipping,
          payments, and{" "}
          <span className="lg:block ">
            customers — all from one simple dashboard.
          </span>
        </p>
      </div>

      <div className="no-scrollbar flex lg:justify-center lg:gap-8 lg:mt-10 mt-6 max-lg:overflow-x-scroll max-lg:px-2">
        {features.map((item) => (
          <Button
            key={item}
            onClick={() => {
              handleClick(item);
              setTitle(item);
            }}
            variant="outline"
            className={`pb-2 text-sm font-medium transition-all duration-200 cursor-pointer
              ${
                active === item
                  ? "max-lg:bg-[#F6F6F6] lg:border-b-2 border-key-btn text-key-btn "
                  : "text-logo-text hover:text-key-btn"
              }`}
          >
            {item}
          </Button>
        ))}
      </div>

      <div className="flex mt-7   ">
        <div className="w-133  bg-key-first flex flex-col gap-1 lg:gap-4 lg:justify-center lg:p-8 items-start text-hero-primary p-5">
          <h3 className="text-xl lg:text-3xl  font-semibold ">{title}</h3>
          <p className="font-semibold ">
            Everything you need to organize your catalog with ease.
          </p>
          <div className="relative  bg-key-second block lg:hidden rounded-md h-64 lg:h-65.75 w-full overflow-hidden mt-5 ">
            <Image
              src={Product}
              alt="Product Image"
              width={356}
              height={273}
              className="relative lg:top-4.5 lg:left-5   lg:h-64 lg:w-96 rounded-tl-md left-15 h-52 w-96 top-12"
            />
          </div>

          <p className="mt-4">
            Manage your products, variants, and inventory from one place. Keep
            stock levels accurate across your online store, physical POS, and
            marketplace channels.
          </p>
          <Button className="cursor-pointer mt-4 lg:w-auto w-full max-lg:py-5">
            Manage Products
          </Button>
        </div>

        <div className="w-202.5 flex-1  bg-key-image pt-16 pl-[128] overflow-hidden hidden lg:block">
          <Image
            src={Product}
            alt="Product Image"
            width={810}
            height={633}
            className="rounded-tl-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default KeyFeatures;
