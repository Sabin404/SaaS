"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import PaymentForm from "./PaymentForm";
// import { Button } from "@/components/ui/button";

type paymentItem = {
  id: number;
  title: string;
  description: string;
  icon: StaticImageData;
  isIcon: boolean;
  connected: boolean;
};

interface PaymentCardsProps {
  item: paymentItem[];
}

const PaymentCards = ({ item }: PaymentCardsProps) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<paymentItem | null>(null);

  const handleOpen = (data: paymentItem) => {
    setSelected(data);
    setOpen(true);
  };
  // console.log(selected);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {item.map((data, index) => (
          <div
            key={data.id}
            className=" rounded-xl p-4 bg-white  flex flex-col justify-between h-full"
          >
            <div className="flex justify-between items-center mb-4">
              <div
                className={`p-3 rounded-[8px] flex items-center justify-center`}
              >
                <Image
                  src={data.icon}
                  alt="icon"
                  width={125}
                  height={38}
                  className={`${index === 0 || index === 1 ? "w-15 h-15" : "w-fit h-fit"}`}
                />
              </div>

              <span
                className={`text-xs px-4 py-0.75 rounded-full font-medium ${
                  !data.connected
                    ? "bg-[#F2F2F7] text-body-text_brand text-[12px]"
                    : "bg-[#F2F2F7] text-secondary_brand text-[12px]"
                }`}
              >
                {data.connected ? "Active" : "Not Connected"}
              </span>
            </div>

            <h3 className="font-semibold text-lg mb-2">{data.title}</h3>

            <p className="text-gray-500 text-sm mb-6">{data.description}</p>

            <button
              onClick={() => handleOpen(data)}
              className={`w-full py-2 px-4 rounded-lg font-medium cursor-pointer transition text-[14px] leading-normal ${
                data.connected
                  ? "border-primary_brand border text-gray-700 hover:bg-gray-200"
                  : "bg-secondary_brand text-white"
              }`}
            >
              {data.connected ? "Configure" : "Activate"}
            </button>
          </div>
        ))}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0">
          <DialogHeader className="bg-[#EBECF3] p-4">
            <DialogTitle>
              {selected?.connected ? "Configure" : "Setup "} {selected?.title}
            </DialogTitle>
            <DialogDescription className="lg:text-sm font-normal">
              Enter your FonePay merchant details to accept payments.
            </DialogDescription>
          </DialogHeader>

          {selected?.connected ? (
            <PaymentForm mode="configure" onClose={() => setOpen(false)} />
          ) : (
            <PaymentForm mode="activate" onClose={() => setOpen(false)} />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PaymentCards;
