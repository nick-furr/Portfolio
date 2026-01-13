import { type ClassValue, clsx } from "clsx";

/**
 * Utility function to merge class names
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Format currency
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

/**
 * Format duration in minutes to readable string
 */
export function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (hours === 0) {
    return `${mins} min`;
  } else if (mins === 0) {
    return `${hours} hr`;
  } else {
    return `${hours} hr ${mins} min`;
  }
}

/**
 * Format date to readable string
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

/**
 * Format time (24hr to 12hr format)
 */
export function formatTime(time: string): string {
  const [hours, minutes] = time.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;
  return `${displayHours}:${minutes.toString().padStart(2, "0")} ${period}`;
}

/**
 * Generate time slots for a given duration
 */
export function generateTimeSlots(
  startTime: string = "09:00",
  endTime: string = "18:00",
  interval: number = 30
): string[] {
  const slots: string[] = [];
  const [startHour, startMinute] = startTime.split(":").map(Number);
  const [endHour, endMinute] = endTime.split(":").map(Number);

  let currentMinutes = startHour * 60 + startMinute;
  const endMinutes = endHour * 60 + endMinute;

  while (currentMinutes < endMinutes) {
    const hours = Math.floor(currentMinutes / 60);
    const minutes = currentMinutes % 60;
    slots.push(
      `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    );
    currentMinutes += interval;
  }

  return slots;
}

/**
 * Check if a time slot is available
 */
export function isTimeSlotAvailable(
  slot: string,
  bookedSlots: string[],
  serviceDuration: number
): boolean {
  const [slotHour, slotMinute] = slot.split(":").map(Number);
  const slotStartMinutes = slotHour * 60 + slotMinute;
  const slotEndMinutes = slotStartMinutes + serviceDuration;

  for (const bookedSlot of bookedSlots) {
    const [bookedHour, bookedMinute] = bookedSlot.split(":").map(Number);
    const bookedStartMinutes = bookedHour * 60 + bookedMinute;

    // Check for overlap
    if (
      (slotStartMinutes >= bookedStartMinutes &&
        slotStartMinutes < bookedStartMinutes + serviceDuration) ||
      (slotEndMinutes > bookedStartMinutes &&
        slotEndMinutes <= bookedStartMinutes + serviceDuration) ||
      (slotStartMinutes <= bookedStartMinutes &&
        slotEndMinutes >= bookedStartMinutes + serviceDuration)
    ) {
      return false;
    }
  }

  return true;
}
