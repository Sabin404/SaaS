import z from "zod";

const formSchema = z.object({
  active: z.boolean(),
  publicKey: z
    .string()
    .min(6, "Public key must be greater than 6 characters")
    .max(16, "Public key must be less than 16 characters"),
  secretKey: z
    .string()
    .min(6, "Secret key must be greater than 6 characters")
    .max(16, "Secret key must be less than 16 characters"),
});

export { formSchema };