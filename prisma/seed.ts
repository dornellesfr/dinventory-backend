/* eslint-disable @typescript-eslint/no-floating-promises */
import Prisma from '../src/database/Prisma';

async function main(): Promise<void> {
  await Prisma.store.create({
    data: {
      name: 'admin',
      password: '$2b$10$XqBDdMxmmAO.BJPUZ78ypONwwrcCkNLKA9xwuWJ4bV.osReVIsmtK',
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
