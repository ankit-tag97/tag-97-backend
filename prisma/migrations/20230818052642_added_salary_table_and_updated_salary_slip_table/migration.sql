/*
  Warnings:

  - You are about to drop the `employees_invoce` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "employees_invoce" DROP CONSTRAINT "employees_invoce_employee_id_fkey";

-- DropTable
DROP TABLE "employees_invoce";

-- CreateTable
CREATE TABLE "employee_salary_slip" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "deleted_at" TIMESTAMPTZ(6),
    "employee_id" TEXT NOT NULL,
    "name" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "designation" VARCHAR NOT NULL,
    "salary_date" TIMESTAMPTZ(6) NOT NULL,
    "location" VARCHAR NOT NULL,
    "mode_of_payment" VARCHAR NOT NULL,
    "basic_salary" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "over_time" INTEGER NOT NULL DEFAULT 0,
    "paid_leave" INTEGER NOT NULL DEFAULT 0,
    "insentive" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "security_amount" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "professional_tax" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "absent" INTEGER NOT NULL DEFAULT 0,
    "advance_withdrawal" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "total_deduction" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "description" VARCHAR NOT NULL,
    "net_pay" DOUBLE PRECISION NOT NULL DEFAULT 0.00,

    CONSTRAINT "employee_salary_slip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "salary" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "deleted_at" TIMESTAMPTZ(6),
    "employee_id" TEXT NOT NULL,
    "date" TIMESTAMPTZ(6) NOT NULL,
    "salary" DOUBLE PRECISION NOT NULL DEFAULT 0.00,

    CONSTRAINT "salary_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "employee_salary_slip" ADD CONSTRAINT "employee_salary_slip_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("employee_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "salary" ADD CONSTRAINT "salary_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("employee_id") ON DELETE RESTRICT ON UPDATE CASCADE;
