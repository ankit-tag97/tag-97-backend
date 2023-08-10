-- DropForeignKey
ALTER TABLE "employees_invoce" DROP CONSTRAINT "employees_invoce_employee_id_fkey";

-- AddForeignKey
ALTER TABLE "employees_invoce" ADD CONSTRAINT "employees_invoce_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leaves" ADD CONSTRAINT "leaves_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("employee_id") ON DELETE RESTRICT ON UPDATE CASCADE;
