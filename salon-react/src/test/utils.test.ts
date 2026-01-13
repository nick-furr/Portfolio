import { describe, it, expect } from "vitest";
import {
  formatCurrency,
  formatDuration,
  formatTime,
  generateTimeSlots,
  isTimeSlotAvailable,
} from "@/lib/utils";

describe("formatCurrency", () => {
  it("should format numbers as USD currency", () => {
    expect(formatCurrency(45)).toBe("$45.00");
    expect(formatCurrency(120.5)).toBe("$120.50");
    expect(formatCurrency(0)).toBe("$0.00");
  });
});

describe("formatDuration", () => {
  it("should format minutes correctly", () => {
    expect(formatDuration(45)).toBe("45 min");
    expect(formatDuration(60)).toBe("1 hr");
    expect(formatDuration(90)).toBe("1 hr 30 min");
    expect(formatDuration(120)).toBe("2 hr");
  });
});

describe("formatTime", () => {
  it("should convert 24hr to 12hr format", () => {
    expect(formatTime("09:00")).toBe("9:00 AM");
    expect(formatTime("12:00")).toBe("12:00 PM");
    expect(formatTime("15:30")).toBe("3:30 PM");
    expect(formatTime("00:00")).toBe("12:00 AM");
  });
});

describe("generateTimeSlots", () => {
  it("should generate time slots with default interval", () => {
    const slots = generateTimeSlots("09:00", "11:00", 30);
    expect(slots).toEqual(["09:00", "09:30", "10:00", "10:30"]);
  });

  it("should generate time slots with custom interval", () => {
    const slots = generateTimeSlots("10:00", "12:00", 60);
    expect(slots).toEqual(["10:00", "11:00"]);
  });
});

describe("isTimeSlotAvailable", () => {
  it("should return true for available slots", () => {
    const bookedSlots = ["09:00", "10:30"];
    expect(isTimeSlotAvailable("11:00", bookedSlots, 60)).toBe(true);
  });

  it("should return false for conflicting slots", () => {
    const bookedSlots = ["09:00"];
    expect(isTimeSlotAvailable("09:30", bookedSlots, 60)).toBe(false);
  });
});
