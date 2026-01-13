"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { appointmentSchema, type AppointmentSchema } from "@/lib/validations";
import { formatCurrency, formatDuration, generateTimeSlots } from "@/lib/utils";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import type { Service, Stylist } from "@/types";
import Textarea from "@/components/ui/Textarea";

export default function Booking() {
  const [services, setServices] = useState<Service[]>([]);
  const [stylists, setStylists] = useState<Stylist[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<AppointmentSchema>({
    resolver: zodResolver(appointmentSchema),
  });

  const selectedServiceId = watch("serviceId");
  const selectedService = services.find((s) => s.id === selectedServiceId);

  useEffect(() => {
    async function fetchData() {
      try {
        const [servicesRes, stylistsRes] = await Promise.all([
          fetch("/api/services"),
          fetch("/api/stylists"),
        ]);

        if (servicesRes.ok) {
          const servicesData = await servicesRes.json();
          setServices(servicesData);
        }

        if (stylistsRes.ok) {
          const stylistsData = await stylistsRes.json();
          setStylists(stylistsData);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const onSubmit = async (data: AppointmentSchema) => {
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to book appointment");
      }

      setSuccess(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setSubmitting(false);
    }
  };

  const timeSlots = generateTimeSlots("09:00", "18:00", 30);

  // Get minimum date (today)
  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="booking" className="bg-white py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 flex justify-center">
              <div className="h-1 w-24 rounded-full bg-gradient-to-r from-rose-400 to-pink-400"></div>
            </div>
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Book Your Appointment</h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll get back to you to confirm your appointment.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Appointment Details</CardTitle>
            </CardHeader>
            <CardContent>
              {success && (
                <div className="mb-6 rounded-lg bg-green-50 p-4 text-green-800">
                  <p className="font-medium">Success!</p>
                  <p className="text-sm">
                    Your appointment request has been received. We'll contact you shortly to confirm.
                  </p>
                </div>
              )}

              {error && (
                <div className="mb-6 rounded-lg bg-red-50 p-4 text-red-800">
                  <p className="font-medium">Error</p>
                  <p className="text-sm">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input
                      label="Full Name"
                      {...register("name")}
                      error={errors.name?.message}
                      required
                      disabled={loading}
                    />
                    <Input
                      label="Phone Number"
                      type="tel"
                      {...register("phone")}
                      error={errors.phone?.message}
                      required
                      disabled={loading}
                    />
                  </div>
                  <Input
                    label="Email Address"
                    type="email"
                    {...register("email")}
                    error={errors.email?.message}
                    required
                    disabled={loading}
                  />
                </div>

                {/* Service Selection */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Service Details</h3>
                  <Select
                    label="Select Service"
                    {...register("serviceId")}
                    error={errors.serviceId?.message}
                    options={[
                      { value: "", label: "Choose a service..." },
                      ...services.map((service) => ({
                        value: service.id,
                        label: `${service.name} - ${formatCurrency(service.price)} (${formatDuration(service.duration)})`,
                      })),
                    ]}
                    required
                    disabled={loading}
                  />

                  {selectedService && (
                    <div className="rounded-lg bg-rose-50 p-4 text-sm">
                      <p className="mb-1 font-medium text-gray-900">{selectedService.name}</p>
                      <p className="mb-2 text-gray-600">{selectedService.description}</p>
                      <div className="flex items-center gap-4 text-gray-700">
                        <span>Duration: {formatDuration(selectedService.duration)}</span>
                        <span>•</span>
                        <span>Price: {formatCurrency(selectedService.price)}</span>
                      </div>
                    </div>
                  )}

                  <Select
                    label="Preferred Stylist (Optional)"
                    {...register("stylistId")}
                    error={errors.stylistId?.message}
                    options={[
                      { value: "", label: "No preference" },
                      ...stylists.map((stylist) => ({
                        value: stylist.id,
                        label: `${stylist.name} - ${stylist.title}`,
                      })),
                    ]}
                    disabled={loading}
                  />
                </div>

                {/* Date and Time */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Date & Time</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input
                      label="Preferred Date"
                      type="date"
                      min={today}
                      {...register("date")}
                      error={errors.date?.message}
                      required
                      disabled={loading}
                    />
                    <Select
                      label="Preferred Time"
                      {...register("time")}
                      error={errors.time?.message}
                      options={[
                        { value: "", label: "Select a time..." },
                        ...timeSlots.map((slot) => ({
                          value: slot,
                          label: new Date(`2000-01-01T${slot}`).toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true,
                          }),
                        })),
                      ]}
                      required
                      disabled={loading}
                    />
                  </div>
                </div>

                {/* Additional Notes */}
                <Textarea
                  label="Additional Notes (Optional)"
                  {...register("notes")}
                  error={errors.notes?.message}
                  placeholder="Any special requests or information we should know?"
                  rows={4}
                  disabled={loading}
                />

                {/* Submit Button */}
                <div className="flex justify-end pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading || submitting}
                    className="min-w-[200px]"
                  >
                    {submitting ? "Booking..." : "Book Appointment"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
