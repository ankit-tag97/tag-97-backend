-- AlterTable
ALTER TABLE "employees_invoce" ALTER COLUMN "employee_id" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "employees_invoce" ADD CONSTRAINT "employees_invoce_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
