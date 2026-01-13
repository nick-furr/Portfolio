"use client";

import Button from "@/components/ui/Button";

export default function Hero() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    bookingSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block rounded-full bg-orange-100 px-4 py-1.5 text-sm font-medium text-orange-800">
            Welcome to Cuisine
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            Experience the Finest{" "}
            <span className="text-orange-600">Culinary Delights</span>
          </h1>

          <p className="mb-8 text-lg text-gray-600 md:text-xl">
            Crafted with passion, served with love. Discover an unforgettable
            dining experience where every dish tells a story.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" onClick={scrollToBooking}>
              Reserve Your Table
            </Button>
            <Button variant="outline" size="lg" onClick={() => {
              const menuSection = document.getElementById("menu");
              menuSection?.scrollIntoView({ behavior: "smooth" });
            }}>
              View Menu
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-gray-200 pt-12">
            <div>
              <div className="mb-2 text-3xl font-bold text-orange-600">25.2k</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-orange-600">62k</div>
              <div className="text-sm text-gray-600">Dishes Served</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-orange-600">55k</div>
              <div className="text-sm text-gray-600">Five-Star Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
