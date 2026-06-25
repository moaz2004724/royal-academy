import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const players = await prisma.player.findMany();
  const payments = await prisma.payment.findMany();
  const trainings = await prisma.training.findMany();
  const groups = await prisma.group.findMany();

  console.log("=== GROUPS ===");
  console.log(JSON.stringify(groups.map(g => ({ id: g.id, name: g.name })), null, 2));

  console.log("\n=== TRAININGS ===");
  console.log(JSON.stringify(trainings, null, 2));

  console.log("\n=== PLAYERS ===");
  console.log(JSON.stringify(players.map(p => ({ id: p.id, name: p.name, groupId: p.groupId, joinDate: p.joinDate })), null, 2));

  console.log("\n=== PAYMENTS ===");
  console.log(JSON.stringify(payments, null, 2));
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
