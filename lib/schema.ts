import * as z from "zod";

const configureFormSchema = z.object({
  active: z.boolean(),
  publicKey: z
    .string()
    .nonempty("Public key is required")
    .min(6, "Public key must be greater than 6 characters")
    .max(16, "Public key must be less than 16 characters"),
  secretKey: z
    .string()
    .nonempty("Secret key is required")
    .min(6, "Secret key must be greater than 6 characters")
    .max(16, "Secret key must be less than 16 characters"),
 
});
const paymentFormSchema = z.object({
  payment: z
    .string()
    .nonempty("Payment instructions are required")
    .min(3, "Payment instructions must be at least 3 characters")
    .max(100, "Payment instructions must be less than 100 characters"),

  qrCode: z
    .string()
    .nonempty("QR code is required"),

  require: z.boolean(), 
});

const multistepFormSchema = z.object({
  firstname:z.string().nonempty("First name is required"),
  middlename:z.string().optional(),
  lastname:z.string().nonempty("Last name is required"),
  email:z.string().email("Please enter a valid email address").nonempty("Email is required"),
}) 

export { configureFormSchema, paymentFormSchema, multistepFormSchema };
export type ConfigureFormData = z.infer<typeof configureFormSchema>;
export type PaymentFormData = z.infer<typeof paymentFormSchema>;
export type MultistepFormData = z.infer<typeof multistepFormSchema>;