// Type definitions for Ayesha Salon

export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  category: string;
  imageUrl?: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Stylist {
  id: string;
  name: string;
  title: string;
  bio?: string;
  imageUrl?: string;
  specialties: string[];
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Appointment {
  id: string;
  customerId: string;
  serviceId: string;
  stylistId?: string;
  date: string;
  time: string;
  duration: number;
  totalPrice: number;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  notes?: string;
  createdAt: string;
  updatedAt: string;
  customer?: Customer;
  service?: Service;
  stylist?: Stylist;
}

export interface TimeSlot {
  time: string;
  available: boolean;
  stylistId?: string;
}

export interface AvailabilityResponse {
  date: string;
  slots: TimeSlot[];
}
