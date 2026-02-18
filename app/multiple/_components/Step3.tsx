"use client";

import { MultistepFormData } from "@/lib/schema";
import { useFormContext } from "react-hook-form";

export default function Step3() {
  const { getValues } = useFormContext<MultistepFormData>();

  return (
    <pre className="bg-gray-100 p-4">
      <div className="mb-10  ">
        <span className="font-bold text-3xl ">
          Confirm gara timro data ani submit gara
        </span>
      </div>
      {JSON.stringify(getValues(), null, 2)}
    </pre>
  );
}
