import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const stylists = await prisma.stylist.findMany({
      where: { active: true },
      include: {
        availability: true,
      },
    });

    // Parse specialties from JSON strings
    const stylistsWithParsedSpecialties = stylists.map((stylist) => ({
      ...stylist,
      specialties: JSON.parse(stylist.specialties),
    }));

    return NextResponse.json(stylistsWithParsedSpecialties);
  } catch (error) {
    console.error("Error fetching stylists:", error);
    return NextResponse.json(
      { error: "Failed to fetch stylists" },
      { status: 500 }
    );
  }
}
