"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import type { Stylist } from "@/types";

export default function Stylists() {
  const [stylists, setStylists] = useState<Stylist[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStylists() {
      try {
        const response = await fetch("/api/stylists");
        if (response.ok) {
          const data = await response.json();
          setStylists(data);
        }
      } catch (error) {
        console.error("Failed to fetch stylists:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStylists();
  }, []);

  return (
    <section id="stylists" className="bg-white py-24">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex justify-center">
            <div className="h-1 w-24 rounded-full bg-gradient-to-r from-rose-400 to-pink-400"></div>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Meet Our Team</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Our talented stylists are passionate about bringing your hair vision to life with expertise and care.
          </p>
        </div>

        {/* Stylists Grid */}
        {loading ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-96 animate-pulse rounded-lg bg-gray-100" />
            ))}
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stylists.map((stylist) => (
              <Card
                key={stylist.id}
                className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {stylist.imageUrl && (
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={stylist.imageUrl}
                      alt={stylist.name}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                )}
                <CardContent className="space-y-4 pt-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{stylist.name}</h3>
                    <p className="text-sm font-medium text-rose-600">{stylist.title}</p>
                  </div>
                  {stylist.bio && (
                    <p className="text-sm leading-relaxed text-gray-600">{stylist.bio}</p>
                  )}
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-gray-900">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {stylist.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-600"
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
        )}
      </div>
    </section>
  );
}
