import { z } from "zod";

// Appointment booking validation schema
export const appointmentSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^[0-9\s()+-]{10,}$/, "Please enter a valid phone number"),
  serviceId: z.string().min(1, "Please select a service"),
  stylistId: z.string().optional(),
  date: z.string().refine(
    (date) => {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    },
    "Please select a future date"
  ),
  time: z.string().min(1, "Please select a time"),
  notes: z.string().max(500, "Notes must be less than 500 characters").optional(),
});

export type AppointmentSchema = z.infer<typeof appointmentSchema>;

// Service filter schema
export const serviceFilterSchema = z.object({
  category: z.string().optional(),
  minPrice: z.number().min(0).optional(),
  maxPrice: z.number().min(0).optional(),
  active: z.boolean().optional(),
});

export type ServiceFilterSchema = z.infer<typeof serviceFilterSchema>;

// Availability check schema
export const availabilitySchema = z.object({
  date: z.string(),
  serviceId: z.string(),
  stylistId: z.string().optional(),
});

export type AvailabilitySchema = z.infer<typeof availabilitySchema>;
