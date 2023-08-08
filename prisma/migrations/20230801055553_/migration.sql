/*
  Warnings:

  - The `warranty` column on the `assets` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "assets" DROP COLUMN "warranty",
ADD COLUMN     "warranty" INTEGER NOT NULL DEFAULT 0;
