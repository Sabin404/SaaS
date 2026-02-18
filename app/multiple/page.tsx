"use client";
import React, { useState } from "react";
import Step3 from "./_components/Step3";
import Step2 from "./_components/Step2";
import Step1 from "./_components/Step1";
import { FormProvider, useForm } from "react-hook-form";
import { MultistepFormData, multistepFormSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";

const Page = () => {
  const [step, setStep] = useState(1);
  const methods = useForm<MultistepFormData>({
    resolver: zodResolver(multistepFormSchema),
  });

  // console.log(methods);

  const next = async () => {
    let valid = false;
    if (step === 1) {
      valid = await methods.trigger(["firstname", "lastname"]);
    } else if (step === 2) {
      valid = await methods.trigger(["email"]);
    } else if (step === 3) {
      valid = await methods.trigger();
    }

    if (valid) {
      setStep((prev) => Math.min(3, prev + 1));
    }
  };

  const prev = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  const onSubmit = (data: MultistepFormData) => {
    console.log(data);
    alert("Timro data haha:\n " + JSON.stringify(data));
  };
  return (
    <>
      <div className="container min-h-screen mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Multi Step Form</h1>

        <div className="mb-6 flex items-center gap-2">
          <span className="font-semibold">Step {step} of 3</span>
        </div>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {step === 1 && <Step1 />}
            {step === 2 && <Step2 />}
            {step === 3 && <Step3 />}

            <div className="flex gap-4 mt-6">
              <button
                type="button"
                disabled={step === 1}
                onClick={prev}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
              >
                Prev
              </button>

              <button
                type="button"
                onClick={next}
                hidden={step === 3}
                className="px-4 py-2 bg-primary_brand text-white_brand rounded"
              >
                Next
              </button>

              {step === 3 && (
                <button
                  type="submit"
                  className="px-4 py-2 bg-secondary_brand rounded"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default Page;
