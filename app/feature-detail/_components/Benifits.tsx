import React from "react";
import { featureData } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const Benifits = () => {
  return (
    <section className=" lg:py-25 py-6 px-4 w-full bg-background_brand">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <h1 className="text-title_brand text-[20px] lg:text-[56px] font-bold lg:text-start text-center leading-[120%]">
            Key Benefits of Smarter Product & Inventory Control
          </h1>
          <p className="lg:text-[20px] text-[14px] lg:mt-0 mt-2   font-normal max-w-120 text-body-text_brand text-center">
            Simplify how you manage products, maintain accurate stock, and keep
            every sales channel perfectly in sync.
          </p>
        </div>
        <div className="grid  gap-6 grid-cols-1 lg:grid-cols-3 lg:mt-13 mt-13">
          {featureData.map((item, index) => (
            <Card key={index} className="bg-white ">
              <CardHeader>
                <CardTitle className="lg:text-[20px] font-semibold leading-[150%] text-title_brand">
                  {item.title}
                </CardTitle>

                <CardDescription className="lg:text-[16px] text-body-text_brand font-normal leading-[150%]">
                  {item.subtitle}
                </CardDescription>
              </CardHeader>

              <CardContent className="  aspect-4/3">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={371}
                  height={371}
                  className="object-cover rounded-md w-full"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benifits;
