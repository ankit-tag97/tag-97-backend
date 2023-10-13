-- DropForeignKey
ALTER TABLE "leaves" DROP CONSTRAINT "leaves_employee_id_fkey";

-- DropForeignKey
ALTER TABLE "salary" DROP CONSTRAINT "salary_employee_id_fkey";

-- DropForeignKey
ALTER TABLE "salary_slip" DROP CONSTRAINT "salary_slip_employee_id_fkey";

-- AddForeignKey
ALTER TABLE "salary_slip" ADD CONSTRAINT "salary_slip_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "salary" ADD CONSTRAINT "salary_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leaves" ADD CONSTRAINT "leaves_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
