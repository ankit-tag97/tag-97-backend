/*
  Warnings:

  - Added the required column `profile_image_url` to the `Employees` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Employees" ADD COLUMN     "profile_image_url" TEXT NOT NULL;
