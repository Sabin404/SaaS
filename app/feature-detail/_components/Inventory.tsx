import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { inventoryData } from "@/lib/data";
import inventory from "../../assets/inventory.png";
import Image from "next/image";

const Inventory = () => {
  return (
    <section className="py-16 hidden lg:block ">
      <div className="container flex flex-row ">
        <div className="relative w-full h-auto mr-9 ">
          <Image
            fill
            src={inventory}
            alt="inventory image"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col">
          <span>Product & Inventory Management</span>
          <h1 className="text-[32px] font-semibold leading-[120%] w-157 mb-6 mt-6">
            Inventory tools that keep everything accurate
          </h1>
          <p className="text-[16px] w-133.5 leading-[150%] font-normal text-body-text_brand mb-6">
            Stay in control with automated systems that track, update, and
            protect your stock across every channel.
          </p>
          <div className="grid grid-cols-2 gap-6 w-157">
            {inventoryData.map((item, index) => (
              <Card key={index} className="rounded-2xl bg-background_brand p-6">
                <div className="flex flex-col w-63.5 ">
                  <div className="flex items-center justify-center w-12 h-12 rounded-[11px] border border-primary_brand">
                    {item.icon()}
                  </div>
                  <div className="flex flex-col gap-2 mt-6">
                    <CardTitle className="text-[18px] font-semibold leading-tight">
                      {item.title}
                    </CardTitle>

                    <CardDescription className="text-[16px] font-normal text-body-text_brand leading-relaxed whitespace-pre-line">
                      {item.subtitle}
                    </CardDescription>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inventory;
