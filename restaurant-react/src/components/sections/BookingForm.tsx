"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema, type BookingSchema } from "@/lib/validations";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

const partySizeOptions = Array.from({ length: 10 }, (_, i) => ({
  value: i + 1,
  label: `${i + 1} ${i + 1 === 1 ? "Person" : "People"}`,
}));

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
  "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM",
  "09:00 PM", "09:30 PM"
].map(time => ({ value: time, label: time }));

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingSchema>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingSchema) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create booking");
      }

      const result = await response.json();

      setSubmitMessage({
        type: "success",
        text: `Booking confirmed! Your reservation for ${data.partySize} on ${data.date} at ${data.time} has been received. Confirmation sent to ${data.email}`,
      });

      reset();
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text: "Sorry, there was an error processing your reservation. Please try again or call us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="booking" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block rounded-full bg-orange-100 px-4 py-1.5 text-sm font-medium text-orange-800">
              Book a Table
            </span>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Reserve Your Experience
            </h2>
            <p className="text-gray-600">
              Secure your table in minutes. We're open Monday to Sunday, 9:00 AM - 10:00 PM.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle as="h3">Reservation Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Input
                    label="Full Name"
                    placeholder="John Doe"
                    required
                    error={errors.name?.message}
                    {...register("name")}
                  />

                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="(555) 123-4567"
                    required
                    error={errors.phone?.message}
                    {...register("phone")}
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="you@example.com"
                    required
                    error={errors.email?.message}
                    {...register("email")}
                  />

                  <Select
                    label="Party Size"
                    required
                    options={[{ value: "", label: "Select party size" }, ...partySizeOptions]}
                    error={errors.partySize?.message}
                    {...register("partySize", { valueAsNumber: true })}
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <Input
                    label="Date"
                    type="date"
                    required
                    min={today}
                    error={errors.date?.message}
                    {...register("date")}
                  />

                  <Select
                    label="Time"
                    required
                    options={[{ value: "", label: "Select time" }, ...timeSlots]}
                    error={errors.time?.message}
                    {...register("time")}
                  />
                </div>

                <Textarea
                  label="Special Requests (Optional)"
                  placeholder="Any dietary restrictions, allergies, or special occasions?"
                  rows={4}
                  error={errors.notes?.message}
                  {...register("notes")}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Confirm Reservation"}
                </Button>

                {submitMessage && (
                  <div
                    className={`rounded-md p-4 ${
                      submitMessage.type === "success"
                        ? "bg-green-50 text-green-800"
                        : "bg-red-50 text-red-800"
                    }`}
                    role="alert"
                  >
                    {submitMessage.text}
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 text-center text-sm text-gray-600">
            <p>
              Need to modify or cancel? Call us at{" "}
              <a href="tel:9119119111" className="font-medium text-orange-600 hover:underline">
                (911) 911-9111
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
