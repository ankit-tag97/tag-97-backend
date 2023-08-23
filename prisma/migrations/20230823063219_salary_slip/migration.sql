/*
  Warnings:

  - You are about to drop the column `employee_id` on the `salary_slip` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[employeeId]` on the table `salary_slip` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `employeeId` to the `salary_slip` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "salary_slip" DROP CONSTRAINT "salary_slip_employee_id_fkey";

-- DropIndex
DROP INDEX "salary_slip_employee_id_id_key";

-- AlterTable
ALTER TABLE "salary_slip" DROP COLUMN "employee_id",
ADD COLUMN     "employeeId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "salary_slip_employeeId_key" ON "salary_slip"("employeeId");

-- AddForeignKey
ALTER TABLE "salary_slip" ADD CONSTRAINT "salary_slip_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
