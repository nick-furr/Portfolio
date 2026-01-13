"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { formatTime } from "@/lib/utils";
import type { Class } from "@/types";
import Link from "next/link";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function Schedule() {
  const [classes, setClasses] = useState<Class[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState<string>("Monday");

  useEffect(() => {
    async function fetchClasses() {
      try {
        const response = await fetch("/api/classes");
        if (response.ok) {
          const data = await response.json();
          setClasses(data);
        }
      } catch (error) {
        console.error("Failed to fetch classes:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchClasses();
  }, []);

  const filteredClasses = classes
    .filter((c) => c.dayOfWeek === selectedDay)
    .sort((a, b) => a.startTime.localeCompare(b.startTime));

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Strength & Power":
        return "bg-red-500/10 text-red-400 border-red-500/20";
      case "Conditioning Lab":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "Hybrid Athlete":
        return "bg-[--color-primary]/10 text-[--color-primary] border-[--color-primary]/20";
      default:
        return "bg-[--color-muted]/10 text-[--color-muted] border-[--color-muted]/20";
    }
  };

  return (
    <section id="schedule" className="section bg-[--color-card]">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="eyebrow">Class Schedule</span>
          <h2 className="mb-4 text-4xl font-bold text-[--color-text]">This Week&apos;s Classes</h2>
          <p className="mx-auto max-w-2xl text-lg text-[--color-muted]">
            Choose from our variety of coach-led classes designed to push your limits and achieve your goals.
          </p>
        </div>

        {/* Day Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`rounded-full px-6 py-2 text-sm font-medium uppercase tracking-wider transition-all ${
                selectedDay === day
                  ? "bg-[--color-primary] text-black shadow-md"
                  : "border border-[--color-border] bg-[--color-card] text-[--color-muted] hover:border-[--color-primary] hover:text-[--color-primary]"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Classes List */}
        {loading ? (
          <div className="grid gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 animate-pulse rounded-2xl bg-[--color-card-alt]" />
            ))}
          </div>
        ) : filteredClasses.length === 0 ? (
          <div className="py-16 text-center text-[--color-muted]">
            No classes scheduled for {selectedDay}. Check back soon or try another day!
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredClasses.map((classItem) => (
              <Card
                key={classItem.id}
                className="group transition-all duration-300 hover:shadow-xl hover:shadow-[--color-primary]/10"
              >
                <CardContent className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-bold text-[--color-text] group-hover:text-[--color-primary]">
                        {classItem.name}
                      </h3>
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-medium ${getCategoryColor(
                          classItem.category
                        )}`}
                      >
                        {classItem.category}
                      </span>
                    </div>
                    {classItem.description && (
                      <p className="text-sm text-[--color-muted]">{classItem.description}</p>
                    )}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[--color-muted]">
                      <div className="flex items-center gap-2">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>
                          {formatTime(classItem.startTime)} - {formatTime(classItem.endTime)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        <span>Coach {classItem.coachName}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        <span>{classItem.maxCapacity} max</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Link href="#contact">
                      <Button variant="outline">Book Class</Button>
                    </Link>
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
