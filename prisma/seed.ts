/* eslint-disable @typescript-eslint/no-floating-promises */
import Prisma from '../src/models/db/Prisma';

async function main(): Promise<void> {
  await Prisma.store.create({
    data: {
      name: 'admin',
      password: 'admin',
      email: 'admin@admin.com',
      admin: true
    }
  });
}

main().catch((e) => {
  console.log(e);
  process.exit(1);
}).finally(() => {
  Prisma.$disconnect();
});
