"use client";

import { Controller, useForm } from "react-hook-form";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ConfigureFormData,
  configureFormSchema,
  PaymentFormData,
  paymentFormSchema,
} from "@/lib/schema";
import { Button } from "@/components/ui/button";
import Qrcode from "./Qrcode";
import { Checkbox } from "@/components/ui/checkbox";

const PaymentForm = ({
  mode,
  onClose,
}: {
  mode: "configure" | "payment";
  onClose: () => void;
}) => {
  //  Configure Form
  const {
    handleSubmit: handleConfigureSubmit,
    control: configureControl,
    formState: { errors: configureErrors },
  } = useForm<ConfigureFormData>({
    resolver: zodResolver(configureFormSchema),
    defaultValues: {
      active: false,
      publicKey: "",
      secretKey: "",
    },
  });

  // console.log(mode);

  //payment form
  const {
    handleSubmit: handlePaymentSubmit,
    control: paymentControl,
    formState: { errors: paymentErrors },
  } = useForm<PaymentFormData>({
    resolver: zodResolver(paymentFormSchema),
    defaultValues: {
      payment: "",
      qrCode: "",
      require: false,
    },
  });

  const onConfigureSubmit = (data: ConfigureFormData) => {
    console.log("Configure Form Data:", data);
    alert("Timro data hera:\n" + JSON.stringify(data, null, 2));
    onClose();
  };

  const onPaymentSubmit = (data: PaymentFormData) => {
    console.log("Payment Form Data:", data);
    alert("Timro data hera:\n" + JSON.stringify(data, null, 2));
    onClose();
  };

  return (
    <div>
      {mode === "configure" ? (
        <form
          onSubmit={handleConfigureSubmit(onConfigureSubmit)}
          className="px-4"
        >
          <label className="flex justify-between items-center lg:mt-4 gap-2 border-b-2 lg:pb-4">
            <span className="font-medium lg:text-base">
              Activate fone pay points?
            </span>
            <Controller
              name="active"
              control={configureControl}
              render={({ field }) => (
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="data-[state=checked]:bg-secondary_brand data-[state=unchecked]:bg-gray-400 hover:cursor-pointer"
                />
              )}
            />
          </label>

          <div className="lg:mt-4">
            <label>
              <span className="lg:text-base font-medium">Public Key</span>
              <Controller
                name="publicKey"
                control={configureControl}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Paste public key here"
                    className="mt-2 w-full p-5 border-[#B6B6B6] border rounded-[8px] placeholder:text-[16px] placeholder:font-normal focus:outline-none focus:ring-0!"
                  />
                )}
              />
              {configureErrors.publicKey && (
                <span className="text-red-500 text-[14px]">
                  {configureErrors.publicKey.message}
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
              <Controller
                name="secretKey"
                control={configureControl}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Paste secret key here"
                    className="mt-2 w-full p-5 border-[#B6B6B6] border rounded-[8px] placeholder:text-[16px] placeholder:font-normal focus:outline-none focus:ring-0!"
                  />
                )}
              />
              {configureErrors.secretKey && (
                <span className="text-red-500 text-[14px]">
                  {configureErrors.secretKey.message}
                </span>
              )}
            </label>
          </div>
          <span className="text-body-text_brand text-sm leading-normal mt-2">
            Keep this secure. Do not share with anyone.
          </span>

          <div className="lg:my-4 flex gap-2">
            <Button
              variant="secondary"
              type="button"
              onClick={onClose}
              className="text-[#8E8E93] cursor-pointer w-full border py-2 px-4 rounded-[8px] text-sm bg-[#E0E0E0] hover:bg-[#C7C7CC] transition font-medium"
            >
              Cancel
            </Button>
            <Button
              variant="secondary"
              type="submit"
              className="bg-secondary_brand w-full cursor-pointer text-[#F8FCFF] font-medium text-sm py-2 px-4 rounded-[8px]"
            >
              Save Changes
            </Button>
          </div>
        </form>
      ) : (
        <form onSubmit={handlePaymentSubmit(onPaymentSubmit)} className="px-4">
          <div className="lg:mt-4">
            <label>
              <span className="lg:text-base font-medium lg:mb-2">
                Payment Instructions
              </span>
              <Controller
                name="payment"
                control={paymentControl}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="e.g. Transfer to NIC Asia Bank or scan the QR below"
                    className="mt-2 w-full p-6 border-[#B6B6B6] border rounded-[8px] placeholder:text-[14px] placeholder:font-normal focus:ring-0!"
                  />
                )}
              />
              {paymentErrors.payment && (
                <span className="text-red-500 hover:cursor-pointer text-[14px] block mt-1">
                  {paymentErrors.payment.message}
                </span>
              )}
            </label>
            <span className="text-body-text_brand text-sm mt-2">
              This message will be shown to customers at checkout.
            </span>
          </div>

          <div className="lg:mt-4">
            <label>
              <span className="lg:text-base font-medium lg:mb-2 text-title_brand">
                Upload QR Code
              </span>
              <Controller
                name="qrCode"
                control={paymentControl}
                rules={{ required: "Please upload a QR code" }}
                render={({ field, fieldState }) => (
                  <>
                    <Qrcode value={field.value} onChange={field.onChange} />
                    {fieldState.error && (
                      <span className="text-red-500 text-sm block mt-1">
                        {fieldState.error.message}
                      </span>
                    )}
                  </>
                )}
              />
              <span className="lg:mt-2 text-sm font-medium text-body-text_brand">
                Upload your bank or wallet QR code for easy payment.
              </span>
            </label>
          </div>

          <div className="lg:mt-4">
            <Controller
              name="require"
              control={paymentControl}
              render={({ field }) => (
                <label className="flex items-center gap-2 cursor-pointer">
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="w-6 h-6 border border-[#D7D7D7] rounded data-[state=checked]:bg-secondary_brand data-[state=checked]:border-secondary_brand"
                  />
                  <span className="lg:text-base font-medium">
                    Require customers to upload payment screenshot
                  </span>
                </label>
              )}
            />
            {paymentErrors.require && (
              <span className="text-red-500 text-[14px] block mt-1">
                {paymentErrors.require.message}
              </span>
            )}
            <span className="block text-body-text_brand text-sm mt-2">
              Helps you verify manual payments faster.
            </span>
          </div>

          <div className="lg:my-4 flex gap-2">
            <Button
              variant="secondary"
              type="button"
              onClick={onClose}
              className="text-[#8E8E93] cursor-pointer w-full border py-2 px-4 rounded-[8px] text-sm bg-[#E0E0E0] hover:bg-[#C7C7CC] transition font-medium"
            >
              Cancel
            </Button>
            <Button
              variant="secondary"
              type="submit"
              className="bg-secondary_brand w-full cursor-pointer text-[#F8FCFF] font-medium text-sm py-2 px-4 rounded-[8px]"
            >
              Save Changes
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default PaymentForm;
