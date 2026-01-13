import { z } from "zod";

export const bookingSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^[0-9\s()+-]{10,}$/, "Please enter a valid phone number"),
  partySize: z.number().min(1, "Party size must be at least 1").max(10, "Maximum party size is 10"),
  date: z.string().refine((date) => {
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
  }, "Please select a future date"),
  time: z.string().min(1, "Please select a time"),
  notes: z.string().max(500, "Notes must be less than 500 characters").optional(),
});

export type BookingSchema = z.infer<typeof bookingSchema>;
