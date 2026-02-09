"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { monthlyData, yearlyData } from "../../../lib/data";
import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [tab, setTab] = useState("monthly");

  const displayedData = tab === "monthly" ? monthlyData : yearlyData;

  const [rupee, setRupee] = useState("USD");

  const getCurrentSymbol = (currency: string) => {
    if (currency === "USD") return "$";
    else if (currency === "NPR") return "रु";
    else if (currency === "IND") return "₹";
    else return "$";
  };
  const currencySymbol = getCurrentSymbol(rupee);

  return (
    <section className="lg:pb-25 p-4 lg:mt-25">
      <div className="container flex flex-col lg:gap-12 gap-6 ">
        {/* Hero Heading */}
        <div className="flex flex-col items-center justify-center lg:gap-4 gap-2">
          <h1 className="text-title_brand text-[20px] lg:text-[64px] font-semibold text-center leading-[120%]">
            Simple, Transparent Pricing{" "}
            <span className="lg:block inline">for Every Business</span>
          </h1>
          <p className="text-[14px] lg:text-[24px] text-body-text_brand font-medium leading-[160%] text-center">
            Choose a plan that fits your store{"'"}s size and growth. No hidden
            fees. Cancel anytime.
          </p>
        </div>

        <div className="flex flex-col gap-6 ">
          <div className="flex lg:justify-between items-end  lg:items-center gap-4 w-full">
            {/* Tabs */}
            <div className="flex flex-col lg:flex-row  lg:items-center gap-4 w-full">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 items-start gap-2  order-1 lg:order-0">
                <span className="text-secondary_brand text-[12px] font-normal whitespace-nowrap lg:text-[14px] lg:font-semibold order-0 lg:order-1">
                  Save up to 20% with yearly
                </span>
                <Tabs value={tab} onValueChange={setTab}>
                  <TabsList className="rounded-[30px] border lg:py-6 lg:px-2 ">
                    <TabsTrigger
                      value="monthly"
                      className="rounded-[30px] lg:h-9 h-6.5 lg:px-3 lg:text-[14px]! text-[12px]! lg:py-2  font-medium hover:cursor-pointer"
                    >
                      Monthly
                    </TabsTrigger>
                    <TabsTrigger
                      value="yearly"
                      className="rounded-[30px] lg:h-9 h-6.5 px-3 lg:text-[14px] text-[12px] py-2 font-medium hover:cursor-pointer"
                    >
                      Yearly
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>

            {/* Price select */}
            <div className="flex items-center  gap-2">
              <span className="text-title_brand lg:text-[14px] text-[12px]  font-medium whitespace-nowrap">
                Price in
              </span>
              <Select value={rupee} onValueChange={setRupee}>
                <SelectTrigger className="bg-[#F4F4F4] lg:text-[14px] text-[12px] font-medium [&_span]:text-title_brand py-2 px-3 rounded-[30px] border-none hover:cursor-pointer focus-visible:ring-0 [&_svg]:text-title_brand">
                  <SelectValue placeholder="USD" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem
                      value="USD"
                      className="hover:cursor-pointer text-title_brand lg:text-[14px] text-[12px] font-medium"
                    >
                      USD
                    </SelectItem>
                    <SelectItem
                      value="NPR"
                      className="hover:cursor-pointer text-title_brand text-[14px] font-medium"
                    >
                      NPR
                    </SelectItem>
                    <SelectItem
                      value="IND"
                      className="hover:cursor-pointer text-title_brand text-[14px] font-medium"
                    >
                      IND
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mt-8 w-full">
            {displayedData.map((price, index) => (
              <Card
                key={index}
                className={`w-full relative rounded-2xl bg-background_brand ${price.isPopular ? "border-primary_brand border-2 shadow-lg" : ""} cursor-pointer`}
              >
                {price.isPopular && (
                  <span className="absolute top-5 right-17 bg-primary_brand text-white text-xs px-3 py-2 rounded-[8px] leading-[150%] font-normal">
                    Most Popular
                  </span>
                )}

                <CardHeader className="space-y-2">
                  <CardTitle className="text-[18px] text-body-text_brand leading-[150%] font-semibold flex items-center gap-3">
                    {price.title}
                  </CardTitle>

                  <div className="flex items-end gap-1">
                    <span className="text-[24px] leading-[150%] font-bold">
                      {currencySymbol} {price.price}
                    </span>
                    <span className="text-[16px] font-normal text-muted-foreground">
                      {tab === "monthly" ? "/ month" : "/ year"}
                    </span>
                  </div>

                  <CardDescription className="text-[16px] text-body-text_brand font-normal leading-[150%]">
                    {price.subtitle}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <Button
                    className={`w-full ${price.isPopular ? "" : "bg-white"}`}
                    variant={price.isPopular ? "default" : "outline"}
                  >
                    {price.buttonText}
                  </Button>
                </CardContent>

                <CardContent>
                  <span className="text-[16px] text-title_brand font-semibold leading-[150%]">
                    {price.description}
                  </span>
                  {price.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex mt-3 items-center gap-1 text-[16px] font-normal text-body-text_brand leading-[150%]"
                    >
                      <CircleCheck
                        fill="#5DC7A4"
                        className="w-5 h-5 text-white shrink-0"
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
