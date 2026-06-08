import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InquirySchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  phone: z.string().min(4).max(40),
  service: z.string().max(80).optional(),
  message: z.string().min(5).max(2000),
});

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InquirySchema.parse(input))
  .handler(async ({ data }) => {
    // Placeholder: in production, forward to email/CRM/database
    console.log("[Inquiry]", data);
    return { ok: true, message: "Thanks! We'll get back within one working day." };
  });
