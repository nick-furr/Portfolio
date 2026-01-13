import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { appointmentSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const validatedData = appointmentSchema.parse(body);

    // Find or create customer
    let customer = await prisma.customer.findUnique({
      where: { email: validatedData.email },
    });

    if (!customer) {
      customer = await prisma.customer.create({
        data: {
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone,
        },
      });
    }

    // Get service details
    const service = await prisma.service.findUnique({
      where: { id: validatedData.serviceId },
    });

    if (!service) {
      return NextResponse.json(
        { error: "Service not found" },
        { status: 404 }
      );
    }

    // Check if stylist exists (if provided)
    if (validatedData.stylistId) {
      const stylist = await prisma.stylist.findUnique({
        where: { id: validatedData.stylistId },
      });

      if (!stylist) {
        return NextResponse.json(
          { error: "Stylist not found" },
          { status: 404 }
        );
      }
    }

    // Check for conflicting appointments
    const existingAppointment = await prisma.appointment.findFirst({
      where: {
        date: validatedData.date,
        time: validatedData.time,
        status: { in: ["pending", "confirmed"] },
        ...(validatedData.stylistId && { stylistId: validatedData.stylistId }),
      },
    });

    if (existingAppointment) {
      return NextResponse.json(
        { error: "This time slot is already booked. Please choose another time." },
        { status: 409 }
      );
    }

    // Create appointment
    const appointment = await prisma.appointment.create({
      data: {
        customerId: customer.id,
        serviceId: service.id,
        stylistId: validatedData.stylistId || null,
        date: validatedData.date,
        time: validatedData.time,
        duration: service.duration,
        totalPrice: service.price,
        notes: validatedData.notes || null,
        status: "pending",
      },
      include: {
        customer: true,
        service: true,
        stylist: true,
      },
    });

    return NextResponse.json(appointment, { status: 201 });
  } catch (error) {
    console.error("Error creating appointment:", error);

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Invalid request data", details: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to create appointment" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const appointments = await prisma.appointment.findMany({
      include: {
        customer: true,
        service: true,
        stylist: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(appointments);
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return NextResponse.json(
      { error: "Failed to fetch appointments" },
      { status: 500 }
    );
  }
}
