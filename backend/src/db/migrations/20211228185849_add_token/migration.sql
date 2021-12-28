/*
  Warnings:

  - You are about to drop the column `quntity` on the `listItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `listItem` DROP COLUMN `quntity`,
    ADD COLUMN `quantity` INTEGER NOT NULL DEFAULT 1;
