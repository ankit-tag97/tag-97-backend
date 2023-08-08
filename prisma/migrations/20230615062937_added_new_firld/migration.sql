/*
  Warnings:

  - You are about to drop the column `address` on the `Employees` table. All the data in the column will be lost.
  - Added the required column `city` to the `Employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pincode` to the `Employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `Employees` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Employees" DROP COLUMN "address",
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "pincode" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "street" TEXT NOT NULL;
