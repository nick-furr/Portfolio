import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { classBookingSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const validatedData = classBookingSchema.parse(body);

    // Find or create user
    let user = await prisma.user.findUnique({
      where: { email: validatedData.email },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone,
        },
      });
    }

    // Get class details
    const classItem = await prisma.class.findUnique({
      where: { id: validatedData.classId },
    });

    if (!classItem) {
      return NextResponse.json(
        { error: "Class not found" },
        { status: 404 }
      );
    }

    // Check capacity - count existing bookings for this class on this date
    const existingBookings = await prisma.classBooking.count({
      where: {
        classId: validatedData.classId,
        date: validatedData.date,
        status: "confirmed",
      },
    });

    if (existingBookings >= classItem.maxCapacity) {
      return NextResponse.json(
        { error: "This class is full. Please choose another date or class." },
        { status: 409 }
      );
    }

    // Check if user already booked this class on this date
    const existingUserBooking = await prisma.classBooking.findFirst({
      where: {
        userId: user.id,
        classId: validatedData.classId,
        date: validatedData.date,
        status: "confirmed",
      },
    });

    if (existingUserBooking) {
      return NextResponse.json(
        { error: "You have already booked this class for this date." },
        { status: 409 }
      );
    }

    // Create booking
    const booking = await prisma.classBooking.create({
      data: {
        userId: user.id,
        classId: classItem.id,
        date: validatedData.date,
        notes: validatedData.notes || null,
        status: "confirmed",
      },
      include: {
        user: true,
        class: true,
      },
    });

    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    console.error("Error creating booking:", error);

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Invalid request data", details: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const bookings = await prisma.classBooking.findMany({
      include: {
        user: true,
        class: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json(
      { error: "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}
