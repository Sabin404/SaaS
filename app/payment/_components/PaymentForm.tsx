import { Controller, useForm } from "react-hook-form";
import { Switch } from "@/components/ui/switch";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/lib/schema";
import z from "zod";

//zod schema

type FormData = z.infer<typeof formSchema>;

const PaymentForm = ({
  mode,
  onClose,
}: {
  mode: string;
  onClose: () => void;
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { active: false },
  });
  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("Timro data hera:\n" + JSON.stringify(data, null, 2));
    onClose();
  };
  return (
    <div>
      {mode === "configure" ? (
        <form onSubmit={handleSubmit(onSubmit)} className="px-4">
          <label className="flex justify-between items-center lg:mt-4 gap-2 border-b-2 lg:pb-4 ">
            <span className="font-medium lg:text-base   ">
              Activate fone pay points?
            </span>
            <Controller
              name="active"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  // required
                  className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-400 hover:cursor-pointer"
                />
              )}
            />
          </label>
          <div className="lg:mt-4">
            <label>
              <span className="lg:text-base font-medium">Public Key</span>
              <input
                className="w-full border-[#B6B6B6] border rounded-[8px] p-4 mt-2 placeholder:text-[14px] placeholder:font-normal"
                type="text"
                placeholder="Paste public key here"
                {...register("publicKey")}
              />
              {errors.publicKey && (
                <span className="text-red-500 text-xs">
                  {errors.publicKey.message}
                </span>
              )}
            </label>
          </div>
          <span className="text-body-text_brand text-sm mt-2">
            Used to identify your wallet during payment requests.
          </span>
          <div className="lg:mt-4">
            <label>
              <span className="lg:text-base font-medium">Secret Key</span>
              <input
                className="w-full border-[#B6B6B6] border rounded-[8px] p-4 mt-2 placeholder:text-[14px] placeholder:font-normal"
                type="text"
                placeholder="Paste secret key here"
                {...register("secretKey")}
              />
              {errors.secretKey && (
                <span className="text-red-500 text-xs">
                  {errors.secretKey.message}
                </span>
              )}
            </label>
          </div>
          <span className="text-body-text_brand text-sm leading-normal mt-2">
            Keep this secure. Do not share with anyone.
          </span>
          <div className="lg:my-4 flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="text-[#8E8E93] cursor-pointer  w-full border py-2 px-4 rounded-[8px] text-sm bg-[#E0E0E0]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className=" bg-secondary_brand w-full cursor-pointer text-[#F8FCFF] font-medium text-sm py-2 px-4 rounded-[8px]"
            >
              Save Changes
            </button>
          </div>
        </form>
      ) : (
        <h1>hii</h1>
      )}
    </div>
  );
};

export default PaymentForm;
