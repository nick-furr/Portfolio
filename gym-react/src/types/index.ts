export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Class {
  id: string;
  name: string;
  description?: string;
  coachName: string;
  startTime: string;
  endTime: string;
  dayOfWeek: string;
  maxCapacity: number;
  category: string;
  createdAt: string;
  updatedAt: string;
}

export interface ClassBooking {
  id: string;
  userId: string;
  classId: string;
  date: string;
  status: "confirmed" | "cancelled" | "completed";
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Membership {
  id: string;
  userId: string;
  planName: string;
  price: number;
  status: "active" | "cancelled" | "paused";
  startDate: string;
  endDate?: string;
  billingCycle: "monthly" | "annual";
  createdAt: string;
  updatedAt: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  goal: string;
  message?: string;
  createdAt: string;
}

export interface MembershipPlan {
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}
