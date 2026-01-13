import { z } from "zod";

export const classBookingSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^[0-9\s()+-]{10,}$/, "Please enter a valid phone number")
    .optional(),
  classId: z.string().min(1, "Please select a class"),
  date: z.string().refine(
    (date) => {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    },
    { message: "Please select a future date" }
  ),
  notes: z
    .string()
    .max(500, "Notes must be less than 500 characters")
    .optional(),
});

export const membershipSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^[0-9\s()+-]{10,}$/, "Please enter a valid phone number"),
  planName: z.string().min(1, "Please select a membership plan"),
  startDate: z.string().refine(
    (date) => {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    },
    { message: "Please select a valid start date" }
  ),
});

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  goal: z.string().min(1, "Please select your primary goal"),
  message: z
    .string()
    .max(1000, "Message must be less than 1000 characters")
    .optional(),
});

export type ClassBookingSchema = z.infer<typeof classBookingSchema>;
export type MembershipSchema = z.infer<typeof membershipSchema>;
export type ContactSchema = z.infer<typeof contactSchema>;
