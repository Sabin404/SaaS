"use client";

import { MultistepFormData } from "@/lib/schema";
import { useFormContext } from "react-hook-form";

export default function Step2() {
  const {
    register,
    formState: { errors },
  } = useFormContext<MultistepFormData>();

  return (
    <div className="space-y-4">
      <input
        {...register("email")}
        placeholder="Email"
        className="border p-2 w-full"
        onKeyDown={(e) => {
          if (e.key === "Enter") e.preventDefault();
        }}
      />
      <p className="text-red-500">{errors.email?.message}</p>
    </div>
  );
}
