import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { featureByPlanData } from "@/lib/data";
import { Check, X } from "lucide-react";
// import React from "react";

const Feature = () => {
  const plans = featureByPlanData[0].plans;
  // console.log(plans);
  const featureKeys = Object.keys(plans[0].features);
  // console.log(featureKeys);
  return (
    <section className="hidden lg:block py-24 bg-muted/30">
      <div className="container mx-auto flex flex-col items-center gap-12">
        {/* Heading */}
        <h1 className="text-center text-5xl font-semibold text-title_brand">
          Feature by Plan
        </h1>

        <div className="w-full  rounded-2xl border bg-background ">
          <Table className="[&_th]:py-6 [&_th]:px-4 [&_td]:py-6 [&_td]:px-4">
            {/* Table Head */}
            <TableHeader>
              <TableRow className="bg-muted/60">
                <TableHead className="w-56 sticky left-0 bg-[#EFEFEF] z-10" />
                {plans.map((plan) => (
                  <TableHead
                    key={plan.name}
                    className="text-center font-semibold text-[20px] leading-[150%] bg-[#EFEFEF]"
                  >
                    {plan.name}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell
                  colSpan={plans.length + 1}
                  className="bg-[#E8E8E8]  text-[20px] leading-[150%] font-semibold "
                >
                  Pricing
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-semibold text-[16px] left-0 bg-background z-10">
                  Pay monthly
                </TableCell>
                {plans.map((plan) => (
                  <TableCell
                    key={plan.name}
                    className="text-center font-medium text-body-text_brand text-[16px] leading-[150%]"
                  >
                    {plan.pricing.monthly}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow className="border-b">
                <TableCell className=" text-[16px] leading-[150%] left-0 bg-background z-10 font-semibold">
                  Pay yearly
                </TableCell>
                {plans.map((plan) => (
                  <TableCell
                    key={plan.name}
                    className="text-center font-medium text-[16px] leading-[150%] text-body-text_brand "
                  >
                    {plan.pricing.yearly}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell
                  colSpan={plans.length + 1}
                  className="bg-[#E8E8E8] font-semibold  text-[20px] leading-[150%]"
                >
                  Features / Plans
                </TableCell>
              </TableRow>

              {featureKeys.map((featureKey) => (
                <TableRow
                  key={featureKey}
                  className="text-[16px] font-semibold leading-[150%] transition"
                >
                  <TableCell className="capitalize font-semibold sticky left-0 bg-background z-10">
                    {featureKey.replace(/_/g, " ")}
                  </TableCell>
                  {plans.map((plan) => {
                    const value =
                      plan.features[featureKey as keyof typeof plan.features];

                    return (
                      <TableCell
                        key={plan.name}
                        className="text-center font-normal text-body-text_brand"
                      >
                        {typeof value === "boolean" ? (
                          value ? (
                            <div className="flex justify-center items-center">
                              <Check className="text-green-600 w-5 h-5" />
                            </div>
                          ) : (
                            <div className="flex justify-center items-center">
                              <X className="text-accent_brand w-5 h-5" />
                            </div>
                          )
                        ) : (
                          value
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default Feature;
