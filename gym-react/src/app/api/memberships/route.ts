import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { membershipSchema } from "@/lib/validations";

const membershipPrices: Record<string, number> = {
  "Open Gym": 8900, // $89 in cents
  "Strength Club": 14900, // $149 in cents
  "Hybrid Unlimited": 18900, // $189 in cents
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const validatedData = membershipSchema.parse(body);

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

    // Check for existing active membership
    const existingMembership = await prisma.membership.findFirst({
      where: {
        userId: user.id,
        status: "active",
      },
    });

    if (existingMembership) {
      return NextResponse.json(
        { error: "You already have an active membership. Please cancel it before signing up for a new one." },
        { status: 409 }
      );
    }

    // Get price for the plan
    const price = membershipPrices[validatedData.planName];
    if (!price) {
      return NextResponse.json(
        { error: "Invalid membership plan" },
        { status: 400 }
      );
    }

    // Create membership
    const membership = await prisma.membership.create({
      data: {
        userId: user.id,
        planName: validatedData.planName,
        price: price,
        startDate: new Date(validatedData.startDate),
        billingCycle: "monthly",
        status: "active",
      },
      include: {
        user: true,
      },
    });

    return NextResponse.json(membership, { status: 201 });
  } catch (error) {
    console.error("Error creating membership:", error);

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Invalid request data", details: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to create membership" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const memberships = await prisma.membership.findMany({
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(memberships);
  } catch (error) {
    console.error("Error fetching memberships:", error);
    return NextResponse.json(
      { error: "Failed to fetch memberships" },
      { status: 500 }
    );
  }
}
