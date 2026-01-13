"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactSchema } from "@/lib/validations";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

const fitnessGoals = [
  { value: "", label: "Select your primary goal..." },
  { value: "Build Strength", label: "Build Strength" },
  { value: "Lose Weight", label: "Lose Weight" },
  { value: "Improve Conditioning", label: "Improve Conditioning" },
  { value: "Athletic Performance", label: "Athletic Performance" },
  { value: "General Fitness", label: "General Fitness" },
  { value: "Rehab/Recovery", label: "Rehab/Recovery" },
];

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactSchema) => {
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit contact form");
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

  return (
    <section id="contact" className="section bg-[--color-bg]">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <span className="eyebrow">Get Started</span>
            <h2 className="mb-4 text-4xl font-bold text-[--color-text]">Start Your Free Trial</h2>
            <p className="text-lg text-[--color-muted]">
              Ready to transform your training? Fill out the form below and we&apos;ll get you started with a free
              7-day trial.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              {success && (
                <div className="mb-6 rounded-lg bg-green-500/10 p-4 text-green-400">
                  <p className="font-medium">Success!</p>
                  <p className="text-sm">
                    Thank you for your interest! We&apos;ll contact you within 24 hours to schedule your free trial.
                  </p>
                </div>
              )}

              {error && (
                <div className="mb-6 rounded-lg bg-red-500/10 p-4 text-red-400">
                  <p className="font-medium">Error</p>
                  <p className="text-sm">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[--color-text]">Personal Information</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input
                      label="Full Name"
                      {...register("name")}
                      error={errors.name?.message}
                      required
                      placeholder="John Doe"
                    />
                    <Input
                      label="Email Address"
                      type="email"
                      {...register("email")}
                      error={errors.email?.message}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Fitness Goal */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[--color-text]">Your Goals</h3>
                  <Select
                    label="Primary Fitness Goal"
                    {...register("goal")}
                    error={errors.goal?.message}
                    options={fitnessGoals}
                    required
                  />
                </div>

                {/* Additional Message */}
                <Textarea
                  label="Tell us more (Optional)"
                  {...register("message")}
                  error={errors.message?.message}
                  placeholder="Tell us about your training experience, any injuries, or specific goals..."
                  rows={4}
                />

                {/* Submit Button */}
                <div className="flex justify-end pt-4">
                  <Button type="submit" size="lg" disabled={submitting} className="min-w-[200px]">
                    {submitting ? "Submitting..." : "Claim Free Trial"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[--color-primary]/10">
                  <svg className="h-6 w-6 text-[--color-primary]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h4 className="mb-2 font-semibold text-[--color-text]">Location</h4>
              <p className="text-sm text-[--color-muted]">
                456 Industrial Blvd
                <br />
                Brooklyn, NY 11201
              </p>
            </div>

            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[--color-primary]/10">
                  <svg className="h-6 w-6 text-[--color-primary]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
              </div>
              <h4 className="mb-2 font-semibold text-[--color-text]">Phone</h4>
              <p className="text-sm text-[--color-muted]">(718) 555-IRON</p>
            </div>

            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[--color-primary]/10">
                  <svg className="h-6 w-6 text-[--color-primary]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h4 className="mb-2 font-semibold text-[--color-text]">Hours</h4>
              <p className="text-sm text-[--color-muted]">
                Open 24/7
                <br />
                Staffed 6 AM - 8 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
