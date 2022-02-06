/*
  Warnings:

  - You are about to drop the column `userId` on the `membership` table. All the data in the column will be lost.
  - You are about to alter the column `userId` on the `token` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(36)`.
  - A unique constraint covering the columns `[userId]` on the table `token` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[membershipId]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `membershipId` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `membership` DROP FOREIGN KEY `membership_userId_fkey`;

-- DropForeignKey
ALTER TABLE `token` DROP FOREIGN KEY `token_userId_fkey`;

-- AlterTable
ALTER TABLE `membership` DROP COLUMN `userId`,
    MODIFY `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updatedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `token` MODIFY `userId` VARCHAR(36) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `membershipId` VARCHAR(36) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `user_membershipId_key` ON `user`(`membershipId`);

-- AddForeignKey
ALTER TABLE `membership` ADD CONSTRAINT `membership_id_fkey` FOREIGN KEY (`id`) REFERENCES `user`(`membershipId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `token` ADD CONSTRAINT `token_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
