"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-[--color-bg] via-[--color-card] to-[--color-bg]"
    >
      <div className="container mx-auto px-6 py-32 text-center lg:px-8">
        <div className="mx-auto max-w-5xl space-y-8 animate-fade-in-up">
          {/* Eyebrow */}
          <div className="mb-8 flex justify-center">
            <span className="eyebrow">Ironclad Fitness</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl font-bold tracking-tight text-[--color-text] sm:text-6xl lg:text-7xl">
            Forge Your Strength.
            <br />
            <span className="text-[--color-primary]">Build Your Legacy.</span>
          </h1>

          {/* Tagline */}
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-[--color-muted]">
            Elite strength and conditioning for athletes who refuse to settle. Join the ranks of the dedicated at
            Brooklyn&apos;s premier performance training facility.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 pt-8 sm:flex-row">
            <Link href="#contact">
              <Button size="lg" className="min-w-[200px]">
                Start Free Trial
              </Button>
            </Link>
            <Link href="#programs">
              <Button variant="outline" size="lg" className="min-w-[200px]">
                View Programs
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-8 pt-16 text-center sm:grid-cols-3">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[--color-primary]">500+</div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-[--color-muted]">
                Active Members
              </h3>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[--color-primary]">15+</div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-[--color-muted]">
                Classes Weekly
              </h3>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[--color-primary]">24/7</div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-[--color-muted]">
                Open Access
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#programs">
          <svg
            className="h-8 w-8 text-[--color-primary]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
