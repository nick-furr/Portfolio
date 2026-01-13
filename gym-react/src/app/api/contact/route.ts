import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { contactSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const validatedData = contactSchema.parse(body);

    // Create contact submission
    const submission = await prisma.contactSubmission.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        goal: validatedData.goal,
        message: validatedData.message || null,
      },
    });

    return NextResponse.json(submission, { status: 201 });
  } catch (error) {
    console.error("Error creating contact submission:", error);

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Invalid request data", details: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const submissions = await prisma.contactSubmission.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(submissions);
  } catch (error) {
    console.error("Error fetching contact submissions:", error);
    return NextResponse.json(
      { error: "Failed to fetch contact submissions" },
      { status: 500 }
    );
  }
}
