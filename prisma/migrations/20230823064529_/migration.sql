/*
  Warnings:

  - You are about to drop the column `employeeId` on the `salary_slip` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[employee_id,id]` on the table `salary_slip` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `employee_id` to the `salary_slip` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "salary_slip" DROP CONSTRAINT "salary_slip_employeeId_fkey";

-- DropIndex
DROP INDEX "salary_slip_employeeId_key";

-- AlterTable
ALTER TABLE "salary_slip" DROP COLUMN "employeeId",
ADD COLUMN     "employee_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "salary_slip_employee_id_id_key" ON "salary_slip"("employee_id", "id");

-- AddForeignKey
ALTER TABLE "salary_slip" ADD CONSTRAINT "salary_slip_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("employee_id") ON DELETE RESTRICT ON UPDATE CASCADE;
