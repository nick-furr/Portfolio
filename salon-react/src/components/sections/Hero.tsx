"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <div className="container mx-auto px-6 py-32 text-center lg:px-8">
        <div className="mx-auto max-w-4xl space-y-8 animate-fade-in">
          {/* Decorative element */}
          <div className="mb-8 flex justify-center">
            <div className="h-1 w-24 rounded-full bg-gradient-to-r from-rose-400 to-pink-400"></div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Ayesha Salon
          </h1>

          {/* Tagline */}
          <p className="text-2xl font-light tracking-wide text-gray-600 sm:text-3xl">
            Where Beauty Meets Elegance
          </p>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
            Experience the art of hair styling with our expert team. From stunning color transformations
            to precision cuts, we bring your vision to life with personalized care and attention to detail.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 pt-8 sm:flex-row">
            <Link href="#booking">
              <Button size="lg" className="min-w-[200px]">
                Book Appointment
              </Button>
            </Link>
            <Link href="#services">
              <Button variant="outline" size="lg" className="min-w-[200px]">
                View Services
              </Button>
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 gap-8 pt-16 text-center sm:grid-cols-3">
            <div className="space-y-2">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                <svg className="h-6 w-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Expert Stylists</h3>
              <p className="text-sm text-gray-600">15+ years of combined experience</p>
            </div>
            <div className="space-y-2">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                <svg className="h-6 w-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Flexible Hours</h3>
              <p className="text-sm text-gray-600">Open Monday to Saturday</p>
            </div>
            <div className="space-y-2">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                <svg className="h-6 w-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Premium Products</h3>
              <p className="text-sm text-gray-600">Only the best for your hair</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#services">
          <svg className="h-8 w-8 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
