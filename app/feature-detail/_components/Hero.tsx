import Image from "next/image";
import HeroPic from "../../assets/hero.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="container flex flex-col items-center lg:mt-20 px-4 py-6">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col lg:justify-between lg:items-center gap-8 px-2 text-center">
          <div>
            <h1 className="lg:text-[64px] text-[20px] font-semibold lg:font-semibold leading-[120%]">
              Manage products and
              <span className="block ">inventory with total accuracy</span>
            </h1>
            <p className="lg:text-[24px] text-[14px] font-medium lg:mt-4 mt-2 text-body-text_brand">
              Organize your entire catalog, track stock, and sync across
              channels automatically.
            </p>
          </div>

          <Button className="bg-primary_brand lg:text-[14px] text-[16px] lg:font-medium rounded-[8px] py-2 px-4 hover:cursor-pointer lg:w-fit ">
            Schedule Demo <ArrowRight />
          </Button>
        </div>

        <div className="flex justify-center items-center ">
          <Image
            src={HeroPic}
            width={1142}
            height={781}
            alt="Hero section image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
