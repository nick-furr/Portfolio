"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { formatCurrency, formatDuration } from "@/lib/utils";
import type { Service } from "@/types";
import Link from "next/link";

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await fetch("/api/services");
        if (response.ok) {
          const data = await response.json();
          setServices(data);
        }
      } catch (error) {
        console.error("Failed to fetch services:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, []);

  const categories = ["all", ...Array.from(new Set(services.map((s) => s.category)))];
  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="bg-white py-24">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex justify-center">
            <div className="h-1 w-24 rounded-full bg-gradient-to-r from-rose-400 to-pink-400"></div>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Discover our comprehensive range of professional hair services, tailored to your unique style and needs.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-rose-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category === "all" ? "All Services" : category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        {loading ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-80 animate-pulse rounded-lg bg-gray-100"
              />
            ))}
          </div>
        ) : filteredServices.length === 0 ? (
          <div className="py-16 text-center text-gray-500">
            No services found in this category.
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <Card
                key={service.id}
                className="group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <CardContent className="space-y-4 pt-6">
                  <div className="mb-4">
                    <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs font-medium text-rose-600">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-rose-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{formatDuration(service.duration)}</span>
                    </div>
                    <div className="text-2xl font-bold text-rose-600">
                      {formatCurrency(service.price)}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="#booking" className="w-full">
                    <Button variant="outline" className="w-full group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-600 transition-all">
                      Book Now
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
