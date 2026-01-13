import { NextRequest, NextResponse } from "next/server";
import { bookingSchema } from "@/lib/validations";
import type { Booking } from "@/types";

// In a real application, this would be a database
// For this demo, we'll use an in-memory store
const bookings: Booking[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = bookingSchema.parse(body);

    // Create booking object
    const booking: Booking = {
      id: `booking-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      ...validatedData,
      notes: validatedData.notes || "",
      createdAt: new Date().toISOString(),
    };

    // Store the booking (in production, this would go to a database)
    bookings.push(booking);

    // In a real app, you would:
    // 1. Save to database
    // 2. Send confirmation email
    // 3. Update availability calendar
    // 4. Notify restaurant staff

    return NextResponse.json(
      {
        success: true,
        message: "Booking created successfully",
        booking: {
          id: booking.id,
          date: booking.date,
          time: booking.time,
          partySize: booking.partySize,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof Error) {
      // Zod validation error
      if ("issues" in error) {
        return NextResponse.json(
          {
            success: false,
            error: "Validation failed",
            details: error,
          },
          { status: 400 }
        );
      }

      // Other errors
      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  // This would typically require authentication
  // For demo purposes, we return the bookings count
  return NextResponse.json({
    success: true,
    count: bookings.length,
    message: "In production, this would require authentication",
  });
}
