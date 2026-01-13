import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Clear existing data
  await prisma.classBooking.deleteMany();
  await prisma.class.deleteMany();

  // Create classes
  const classes = [
    // Monday
    {
      name: "Powerlifting Fundamentals",
      description: "Master the big three lifts with focused technique work and progressive loading.",
      coachName: "Maya Chen",
      startTime: "06:00",
      endTime: "07:30",
      dayOfWeek: "Monday",
      maxCapacity: 12,
      category: "Strength & Power",
    },
    {
      name: "Metabolic Conditioning",
      description: "High-intensity intervals designed to improve work capacity and fat loss.",
      coachName: "Andre Lewis",
      startTime: "09:00",
      endTime: "10:00",
      dayOfWeek: "Monday",
      maxCapacity: 16,
      category: "Conditioning Lab",
    },
    {
      name: "Hybrid Performance",
      description: "Balanced strength and conditioning for complete athletic development.",
      coachName: "Jordan Reyes",
      startTime: "18:00",
      endTime: "19:30",
      dayOfWeek: "Monday",
      maxCapacity: 14,
      category: "Hybrid Athlete",
    },

    // Tuesday
    {
      name: "Olympic Lifting",
      description: "Develop explosive power through the snatch and clean & jerk.",
      coachName: "Maya Chen",
      startTime: "06:00",
      endTime: "07:30",
      dayOfWeek: "Tuesday",
      maxCapacity: 10,
      category: "Strength & Power",
    },
    {
      name: "Endurance Engine",
      description: "Build an unbreakable aerobic base with sustained efforts and interval work.",
      coachName: "Jordan Reyes",
      startTime: "17:00",
      endTime: "18:00",
      dayOfWeek: "Tuesday",
      maxCapacity: 16,
      category: "Conditioning Lab",
    },

    // Wednesday
    {
      name: "Maximal Strength",
      description: "Low-rep, high-intensity training focused on absolute strength development.",
      coachName: "Maya Chen",
      startTime: "06:00",
      endTime: "07:30",
      dayOfWeek: "Wednesday",
      maxCapacity: 12,
      category: "Strength & Power",
    },
    {
      name: "HIIT Lab",
      description: "Science-backed high-intensity interval protocols for maximum adaptation.",
      coachName: "Andre Lewis",
      startTime: "12:00",
      endTime: "13:00",
      dayOfWeek: "Wednesday",
      maxCapacity: 16,
      category: "Conditioning Lab",
    },
    {
      name: "Hybrid Performance",
      description: "Balanced strength and conditioning for complete athletic development.",
      coachName: "Jordan Reyes",
      startTime: "18:00",
      endTime: "19:30",
      dayOfWeek: "Wednesday",
      maxCapacity: 14,
      category: "Hybrid Athlete",
    },

    // Thursday
    {
      name: "Strongman Training",
      description: "Unconventional implements and movements for functional strength.",
      coachName: "Maya Chen",
      startTime: "17:00",
      endTime: "18:30",
      dayOfWeek: "Thursday",
      maxCapacity: 12,
      category: "Strength & Power",
    },
    {
      name: "Conditioning Complex",
      description: "Multi-modal conditioning using various implements and modalities.",
      coachName: "Andre Lewis",
      startTime: "18:30",
      endTime: "19:30",
      dayOfWeek: "Thursday",
      maxCapacity: 16,
      category: "Conditioning Lab",
    },

    // Friday
    {
      name: "Competition Prep",
      description: "Sport-specific training for powerlifting and weightlifting competitors.",
      coachName: "Maya Chen",
      startTime: "06:00",
      endTime: "07:30",
      dayOfWeek: "Friday",
      maxCapacity: 10,
      category: "Strength & Power",
    },
    {
      name: "Friday Night Grind",
      description: "End the week with a brutal conditioning session.",
      coachName: "Andre Lewis",
      startTime: "18:00",
      endTime: "19:00",
      dayOfWeek: "Friday",
      maxCapacity: 20,
      category: "Conditioning Lab",
    },

    // Saturday
    {
      name: "Hybrid Warrior",
      description: "Saturday morning full-body strength and conditioning.",
      coachName: "Jordan Reyes",
      startTime: "09:00",
      endTime: "10:30",
      dayOfWeek: "Saturday",
      maxCapacity: 16,
      category: "Hybrid Athlete",
    },
    {
      name: "Strongman Saturday",
      description: "Weekend strongman training with heavy carries and unique implements.",
      coachName: "Maya Chen",
      startTime: "11:00",
      endTime: "12:30",
      dayOfWeek: "Saturday",
      maxCapacity: 12,
      category: "Strength & Power",
    },

    // Sunday
    {
      name: "Recovery & Mobility",
      description: "Active recovery session with mobility work and light conditioning.",
      coachName: "Jordan Reyes",
      startTime: "10:00",
      endTime: "11:00",
      dayOfWeek: "Sunday",
      maxCapacity: 20,
      category: "Hybrid Athlete",
    },
  ];

  for (const classData of classes) {
    await prisma.class.create({
      data: classData,
    });
  }

  console.log(`Created ${classes.length} classes`);
  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
