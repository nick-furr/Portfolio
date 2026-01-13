import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  console.log("Seeding database...");

  // Create Services
  const services = await Promise.all([
    prisma.service.create({
      data: {
        name: "Classic Hair Coloring",
        description: "Full head hair coloring with premium products",
        duration: 120,
        price: 85.0,
        category: "Hair Coloring",
        active: true,
      },
    }),
    prisma.service.create({
      data: {
        name: "Blonde & Highlights",
        description: "Beautiful blonde highlights and balayage",
        duration: 180,
        price: 120.0,
        category: "Hair Coloring",
        active: true,
      },
    }),
    prisma.service.create({
      data: {
        name: "Women's Haircut",
        description: "Professional haircut with styling",
        duration: 60,
        price: 45.0,
        category: "Haircuts",
        active: true,
      },
    }),
    prisma.service.create({
      data: {
        name: "Men's Haircut",
        description: "Classic men's cut and styling",
        duration: 45,
        price: 35.0,
        category: "Haircuts",
        active: true,
      },
    }),
    prisma.service.create({
      data: {
        name: "Keratin Treatment",
        description: "Smoothing keratin treatment for frizz-free hair",
        duration: 180,
        price: 200.0,
        category: "Treatments",
        active: true,
      },
    }),
    prisma.service.create({
      data: {
        name: "Deep Conditioning",
        description: "Intensive moisture treatment",
        duration: 45,
        price: 30.0,
        category: "Treatments",
        active: true,
      },
    }),
    prisma.service.create({
      data: {
        name: "Blowout & Styling",
        description: "Professional blowout and styling",
        duration: 45,
        price: 40.0,
        category: "Styling",
        active: true,
      },
    }),
    prisma.service.create({
      data: {
        name: "Bridal Hair",
        description: "Elegant bridal hair styling",
        duration: 120,
        price: 150.0,
        category: "Special Occasions",
        active: true,
      },
    }),
  ]);

  console.log(`Created ${services.length} services`);

  // Create Stylists
  const stylists = await Promise.all([
    prisma.stylist.create({
      data: {
        name: "Alita Williams",
        title: "Master Colourist",
        bio: "15+ years of experience in hair coloring and color correction. Specializes in blonde transformations.",
        specialties: JSON.stringify([
          "Hair Coloring",
          "Blonde & Highlights",
          "Color Correction",
        ]),
        active: true,
      },
    }),
    prisma.stylist.create({
      data: {
        name: "Sofia Martinez",
        title: "Senior Stylist",
        bio: "Expert in modern cuts and styles. Passionate about helping clients find their perfect look.",
        specialties: JSON.stringify([
          "Haircuts",
          "Styling",
          "Bridal Hair",
        ]),
        active: true,
      },
    }),
    prisma.stylist.create({
      data: {
        name: "Emma Chen",
        title: "Treatment Specialist",
        bio: "Certified in advanced hair treatments. Specializes in keratin and hair restoration.",
        specialties: JSON.stringify([
          "Keratin Treatment",
          "Deep Conditioning",
          "Hair Repair",
        ]),
        active: true,
      },
    }),
  ]);

  console.log(`Created ${stylists.length} stylists`);

  // Create availability for each stylist (Mon-Sat, 9:00-18:00)
  const availabilities = [];
  for (const stylist of stylists) {
    for (let day = 1; day <= 6; day++) {
      // Monday to Saturday
      availabilities.push(
        prisma.stylistAvailability.create({
          data: {
            stylistId: stylist.id,
            dayOfWeek: day,
            startTime: "09:00",
            endTime: "18:00",
          },
        })
      );
    }
  }

  await Promise.all(availabilities);
  console.log(`Created ${availabilities.length} availability slots`);

  console.log("Database seeded successfully!");

  await prisma.$disconnect();
}

main()
  .catch((e) => {
    console.error("Error seeding database:", e);
    process.exit(1);
  });
