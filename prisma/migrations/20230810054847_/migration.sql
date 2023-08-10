/*
  Warnings:

  - A unique constraint covering the columns `[employee_id]` on the table `employees` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "employees_invoce" DROP CONSTRAINT "employees_invoce_employee_id_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "employees_employee_id_key" ON "employees"("employee_id");

-- AddForeignKey
ALTER TABLE "employees_invoce" ADD CONSTRAINT "employees_invoce_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("employee_id") ON DELETE RESTRICT ON UPDATE CASCADE;
