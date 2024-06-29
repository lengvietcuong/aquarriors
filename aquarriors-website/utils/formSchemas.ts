import { z } from "zod";
import { isPossiblePhoneNumber } from "libphonenumber-js";
import { predefinedDonationTypes } from "./constants";

export const donationFormSchema = z.object({
  type: z.enum(predefinedDonationTypes as [string, ...string[]]),
  amount: z
    .number()
    .int({ message: "Must be a whole number." })
    .positive({ message: "Minimum amount is $1." }),
  name: z
    .string()
    .trim()
    .min(2, { message: "Must be at least 2 characters." })
    .max(50, { message: "Must be at most 50 characters." })
    .refine((name) => /^[a-zA-Z\s]+$/g.test(name), {
      message: "Only alphabetic characters and spaces allowed.",
    }),
  email: z.string().trim().email({ message: "Invalid email address." }),
  phone: z
    .string()
    .trim()
    .refine(
      (phone) =>
        isPossiblePhoneNumber(phone, "VN") ||
        isPossiblePhoneNumber("+" + phone),
      { message: "Invalid phone number." },
    )
    .optional(),
  message: z
    .string()
    .trim()
    .max(150, "Must be at most 150 characters.")
    .optional(),
  subscribe: z.boolean()
});

export const volunteerFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, {
      message: "Must be at least 2 characters.",
    })
    .max(50, {
      message: "Must be at most 50 characters.",
    })
    .refine((name) => /^[a-zA-Z\s]+$/g.test(name), {
      message: "Only alphabetic characters and spaces allowed.",
    }),
  email: z.string().trim().email({
    message: "Invalid email address.",
  }),
  phone: z
    .string()
    .trim()
    .refine(
      (phone) =>
        isPossiblePhoneNumber(phone, "VN") ||
        isPossiblePhoneNumber("+" + phone),
      {
        message: "Invalid phone number.",
      },
    )
    .optional(),
  oldEnough: z.literal<boolean>(true, {
    errorMap: () => ({
      message:
        "Sorry, for safety reasons you must be at least 16 years old to participate.",
    }),
  }),
  subscribe: z.boolean(),
});

export type DonationFormData = z.infer<typeof donationFormSchema>;
export type VolunteerFormData = z.infer<typeof volunteerFormSchema>;
