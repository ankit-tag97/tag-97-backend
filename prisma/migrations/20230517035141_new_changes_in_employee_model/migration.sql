/*
  Warnings:

  - Made the column `aadhar` on table `Employees` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Employees" ALTER COLUMN "aadhar" SET NOT NULL;
