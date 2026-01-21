import { PrismaPg } from "@prisma/adapter-pg";
// import { Pool } from "pg";
// import { attachDatabasePool } from "@vercel/functions";
import { PrismaClient } from "@/generated/prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

// const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// attachDatabasePool(pool);

// const prisma =
//   globalForPrisma.prisma ||
//   new PrismaClient({
//     adapter: new PrismaPg(pool),
//   }).$extends(withAccelerate());

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

// const prisma =
//   globalForPrisma.prisma ||
//   new PrismaClient({
//     adapter,
//   }).$extends(withAccelerate());
const url = process.env.DATABASE_URL ?? "";
const isAccelerate = url.startsWith("prisma://");
const params = isAccelerate ? { accelerateUrl: url } : { adapter: adapter };

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({ ...params }).$extends(withAccelerate());

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
