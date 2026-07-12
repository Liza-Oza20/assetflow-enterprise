import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { ROLE } from "../src/lib/constants";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("Admin@123", 10);

  const admin = await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: {
      name: "System Admin",
      email: "admin@example.com",
      passwordHash,
      role: ROLE.ADMIN,
    },
  });

  console.log("Seeded admin user:", admin.email, "(password: Admin@123)");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
