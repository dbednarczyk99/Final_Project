/*
  Warnings:

  - You are about to drop the column `clientId` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `order` table. All the data in the column will be lost.
  - You are about to drop the `client` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `customerAddress` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerEmail` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerName` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerPhone` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPrice` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mainImageUrl` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_clientId_fkey`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_productId_fkey`;

-- DropIndex
DROP INDEX `Order_clientId_fkey` ON `order`;

-- DropIndex
DROP INDEX `Order_productId_fkey` ON `order`;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `clientId`,
    DROP COLUMN `productId`,
    ADD COLUMN `customerAddress` VARCHAR(191) NOT NULL,
    ADD COLUMN `customerEmail` VARCHAR(191) NOT NULL,
    ADD COLUMN `customerName` VARCHAR(191) NOT NULL,
    ADD COLUMN `customerPhone` VARCHAR(191) NOT NULL,
    ADD COLUMN `totalPrice` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `product` ADD COLUMN `category` ENUM('OFFICE_BACKPACK', 'TRAVEL_BACKPACK', 'MOUNTAIN_BACKPACK', 'SPORTS_BACKPACK') NOT NULL,
    ADD COLUMN `mainImageUrl` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `client`;

-- CreateTable
CREATE TABLE `ProductImage` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderItem` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `orderId` VARCHAR(191) NULL,
    `productId` VARCHAR(191) NULL,
    `quantity` INTEGER NOT NULL,
    `unitPrice` INTEGER NOT NULL,
    `orderItemPrice` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProductImage` ADD CONSTRAINT `ProductImage_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderItem` ADD CONSTRAINT `OrderItem_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderItem` ADD CONSTRAINT `OrderItem_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
