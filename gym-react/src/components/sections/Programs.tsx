"use client";

import { Card, CardContent } from "@/components/ui/Card";

const programs = [
  {
    name: "Strength & Power",
    description: "Build raw strength and explosive power through barbell training and Olympic lifts.",
    benefits: [
      "Maximal strength development",
      "Power output optimization",
      "Progressive barbell programming",
      "Competition-style training",
    ],
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    name: "Conditioning Lab",
    description: "High-intensity metabolic conditioning to maximize work capacity and cardiovascular fitness.",
    benefits: [
      "Enhanced aerobic capacity",
      "Improved work tolerance",
      "Efficient energy systems",
      "Fat loss optimization",
    ],
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    name: "Hybrid Athlete",
    description: "The perfect blend of strength and conditioning for complete athletic development.",
    benefits: [
      "Balanced strength & endurance",
      "Sport-specific training",
      "Periodized programming",
      "Performance optimization",
    ],
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
];

export default function Programs() {
  return (
    <section id="programs" className="section bg-[--color-bg]">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="eyebrow">Training Programs</span>
          <h2 className="mb-4 text-4xl font-bold text-[--color-text]">Choose Your Path</h2>
          <p className="mx-auto max-w-2xl text-lg text-[--color-muted]">
            Whether you&apos;re chasing strength, endurance, or the best of both worlds, we have the program to match
            your goals.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {programs.map((program, index) => (
            <Card
              key={program.name}
              className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[--color-primary]/20"
            >
              <CardContent className="space-y-6 pt-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[--color-primary]/10 text-[--color-primary] transition-colors group-hover:bg-[--color-primary] group-hover:text-black">
                  {program.icon}
                </div>
                <div>
                  <h3 className="mb-3 text-2xl font-bold text-[--color-text] transition-colors group-hover:text-[--color-primary]">
                    {program.name}
                  </h3>
                  <p className="mb-6 text-[--color-muted]">{program.description}</p>
                </div>
                <ul className="space-y-3">
                  {program.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-[--color-primary]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-[--color-text]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
