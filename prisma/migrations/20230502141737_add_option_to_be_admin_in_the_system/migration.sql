/*
  Warnings:

  - Added the required column `admin` to the `Store` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Store` ADD COLUMN `admin` BOOLEAN NOT NULL;
