/*
  Warnings:

  - You are about to drop the column `membershipId` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `membership` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `membership` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `membership` DROP FOREIGN KEY `membership_id_fkey`;

-- DropIndex
DROP INDEX `user_membershipId_key` ON `user`;

-- AlterTable
ALTER TABLE `membership` ADD COLUMN `userId` VARCHAR(36) NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `membershipId`;

-- CreateIndex
CREATE UNIQUE INDEX `membership_userId_key` ON `membership`(`userId`);

-- AddForeignKey
ALTER TABLE `membership` ADD CONSTRAINT `membership_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
