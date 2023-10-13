/*
  Warnings:

  - You are about to drop the column `employeeId` on the `salary_slip` table. All the data in the column will be lost.
  - Added the required column `employeeID` to the `salary_slip` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "salary_slip" DROP COLUMN "employeeId",
ADD COLUMN     "employeeID" VARCHAR NOT NULL;
