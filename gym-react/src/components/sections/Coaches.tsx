"use client";

import { Card, CardContent } from "@/components/ui/Card";

const coaches = [
  {
    name: "Maya Chen",
    title: "Head Strength Coach",
    bio: "Former national-level powerlifter with 12 years of coaching experience. Specializes in building raw strength and perfecting technique.",
    specialties: ["Powerlifting", "Olympic Lifting", "Mobility"],
    credentials: "CSCS, USAW-L2",
  },
  {
    name: "Andre Lewis",
    title: "Conditioning Director",
    bio: "Ex-collegiate track athlete and CrossFit Games competitor. Expert in high-intensity conditioning and metabolic training.",
    specialties: ["Conditioning", "Sport Performance", "Nutrition"],
    credentials: "CF-L3, NSCA-CPT",
  },
  {
    name: "Jordan Reyes",
    title: "Hybrid Performance Coach",
    bio: "Endurance athlete turned strength coach. Masters the art of balancing strength and conditioning for complete athleticism.",
    specialties: ["Hybrid Training", "Endurance", "Recovery"],
    credentials: "CSCS, FMS-L2",
  },
];

export default function Coaches() {
  return (
    <section id="coaches" className="section bg-[--color-bg]">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="eyebrow">Our Coaches</span>
          <h2 className="mb-4 text-4xl font-bold text-[--color-text]">Trained by the Best</h2>
          <p className="mx-auto max-w-2xl text-lg text-[--color-muted]">
            Our elite coaching staff brings decades of combined experience in strength, conditioning, and athletic
            performance.
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {coaches.map((coach) => (
            <Card
              key={coach.name}
              className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[--color-primary]/20"
            >
              <CardContent className="space-y-6 pt-8">
                {/* Avatar Placeholder */}
                <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-[--color-primary] to-[--color-primary-dark] text-4xl font-bold text-black">
                  {coach.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <div className="text-center">
                  <h3 className="mb-2 text-2xl font-bold text-[--color-text] transition-colors group-hover:text-[--color-primary]">
                    {coach.name}
                  </h3>
                  <p className="mb-4 text-sm font-medium uppercase tracking-wider text-[--color-primary]">
                    {coach.title}
                  </p>
                  <p className="mb-4 text-sm text-[--color-muted]">{coach.bio}</p>
                  <p className="mb-4 text-xs text-[--color-muted]">{coach.credentials}</p>
                </div>

                {/* Specialties */}
                <div className="space-y-3">
                  <h4 className="text-center text-xs font-semibold uppercase tracking-wider text-[--color-text]">
                    Specialties
                  </h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {coach.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="rounded-full border border-[--color-border] bg-[--color-card-alt] px-3 py-1 text-xs font-medium text-[--color-text]"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
