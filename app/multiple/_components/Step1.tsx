"use client";

import { MultistepFormData } from "@/lib/schema";
import { useFormContext } from "react-hook-form";

export default function Step1() {
  const {
    register,
    formState: { errors },
  } = useFormContext<MultistepFormData>();

  return (
    <div className="space-y-4">
      <div>
        <input
          {...register("firstname")}
          placeholder="First Name"
          className="border p-2 w-full"
        />
        <p className="text-red-500">{errors.firstname?.message}</p>
      </div>
      <div>
        <input
          {...register("middlename")}
          placeholder="middle Name (optional)"
          className="border p-2 w-full"
        />
        <p className="text-red-500">{errors.middlename?.message}</p>
      </div>

      <div>
        <input
          {...register("lastname")}
          placeholder="Last Name"
          className="border p-2 w-full"
        />
        <p className="text-red-500">{errors.lastname?.message}</p>
      </div>
    </div>
  );
}
