"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { formatCurrency } from "@/lib/utils";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Open Gym",
    price: 89,
    billingCycle: "monthly" as const,
    description: "For self-motivated athletes who thrive on independence.",
    features: [
      "24/7 facility access",
      "All equipment available",
      "Member app access",
      "Community events",
      "Locker rental available",
    ],
    highlighted: false,
  },
  {
    name: "Strength Club",
    price: 149,
    billingCycle: "monthly" as const,
    description: "Perfect for those focused on building pure strength.",
    features: [
      "Everything in Open Gym",
      "Unlimited Strength & Power classes",
      "Monthly body composition scan",
      "Personal program design",
      "Priority class booking",
      "Nutrition consultation",
    ],
    highlighted: false,
  },
  {
    name: "Hybrid Unlimited",
    price: 189,
    billingCycle: "monthly" as const,
    description: "The complete package for serious athletes.",
    features: [
      "Everything in Strength Club",
      "All classes unlimited",
      "Weekly 1-on-1 coaching",
      "Custom programming",
      "Recovery tools access",
      "Quarterly performance testing",
      "VIP member events",
    ],
    highlighted: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section bg-[--color-card]">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="eyebrow">Membership Plans</span>
          <h2 className="mb-4 text-4xl font-bold text-[--color-text]">Invest in Yourself</h2>
          <p className="mx-auto max-w-2xl text-lg text-[--color-muted]">
            Choose the membership that fits your goals. All plans include access to our world-class facility and
            supportive community.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`group relative transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.highlighted
                  ? "border-[--color-primary] shadow-xl shadow-[--color-primary]/20"
                  : "hover:shadow-[--color-primary]/10"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-[--color-primary] px-4 py-1 text-xs font-bold uppercase tracking-wider text-black">
                    Most Popular
                  </span>
                </div>
              )}
              <CardContent className="space-y-6 pt-8">
                <div className="text-center">
                  <h3 className="mb-2 text-2xl font-bold text-[--color-text]">{plan.name}</h3>
                  <p className="mb-6 text-sm text-[--color-muted]">{plan.description}</p>
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-[--color-primary]">
                        {formatCurrency(plan.price)}
                      </span>
                      <span className="ml-2 text-[--color-muted]">/month</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-[--color-primary]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-[--color-text]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="#contact" className="w-full">
                  <Button
                    variant={plan.highlighted ? "primary" : "outline"}
                    className="w-full group-hover:bg-[--color-primary] group-hover:text-black"
                  >
                    Get Started
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center text-sm text-[--color-muted]">
          <p>
            All memberships come with a 7-day free trial. No contracts required.
            <br />
            Questions? <Link href="#contact" className="text-[--color-primary] hover:underline">Contact us</Link> for a custom plan.
          </p>
        </div>
      </div>
    </section>
  );
}
