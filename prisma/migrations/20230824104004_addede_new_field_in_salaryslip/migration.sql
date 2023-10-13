/*
  Warnings:

  - Added the required column `employeeId` to the `salary_slip` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "salary_slip" ADD COLUMN     "employeeId" VARCHAR NOT NULL;
