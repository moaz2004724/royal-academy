import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log("Cleaning database for production launch...");
  await prisma.message.deleteMany();
  await prisma.evaluation.deleteMany();
  await prisma.attendance.deleteMany();
  await prisma.payment.deleteMany();
  await prisma.training.deleteMany();
  await prisma.player.deleteMany();
  await prisma.coach.deleteMany();
  await prisma.parent.deleteMany();
  await prisma.group.deleteMany();
  await prisma.user.deleteMany();

  console.log("Seeding admin user...");
  await prisma.user.create({
    data: {
      id: "admin",
      email: "admin@royals.sa",
      password: "Royals@2026",
      role: "ADMIN",
      name: "مدير الأكاديمية"
    }
  });

  console.log("Database successfully prepared for production launch!");
}

main()
  .catch((e) => {
    console.error("Error during seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
