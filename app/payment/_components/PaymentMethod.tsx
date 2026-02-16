import React from "react";
import { paymentData } from "@/lib/data";
import PaymentCards from "./PaymentCards";
// import PaymentForm from "./PaymentForm";

const PaymentMethod = () => {
  return (
    <section className=" w-full">
      <div className="container bg-background_brand p-6 lg:h-260.75">
        <div className="space-y-1">
          <h1 className="text-title_brand lg:text-[18px] leading-normal font-semibold">
            Payment Method
          </h1>
          <p className="text-body-text_brand lg:text-sm leading-normal font-normal">
            Choose how customers can pay for their orders.
          </p>
        </div>
        <div>
          <PaymentCards item={paymentData} />
        </div>
      </div>
    </section>
  );
};

export default PaymentMethod;
