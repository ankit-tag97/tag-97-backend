/*
  Warnings:

  - You are about to drop the `employee_salary_slip` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "employee_salary_slip" DROP CONSTRAINT "employee_salary_slip_employee_id_fkey";

-- DropTable
DROP TABLE "employee_salary_slip";

-- CreateTable
CREATE TABLE "salary_slip" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "deleted_at" TIMESTAMPTZ(6),
    "name" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "designation" VARCHAR NOT NULL,
    "salary_date" TIMESTAMP(3) NOT NULL,
    "location" VARCHAR NOT NULL,
    "mode_of_payment" VARCHAR NOT NULL,
    "basic_salary" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "over_time" INTEGER NOT NULL DEFAULT 0,
    "paid_leave" INTEGER NOT NULL DEFAULT 0,
    "insentive" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "security_amount" DOUBLE PRECISION DEFAULT 0.00,
    "professional_tax" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "absent" INTEGER NOT NULL DEFAULT 0,
    "advance_withdrawal" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "total_deduction" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "description" VARCHAR NOT NULL,
    "net_pay" DOUBLE PRECISION DEFAULT 0.00,
    "employee_id" TEXT NOT NULL,

    CONSTRAINT "salary_slip_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "salary_slip_employee_id_id_key" ON "salary_slip"("employee_id", "id");

-- AddForeignKey
ALTER TABLE "salary_slip" ADD CONSTRAINT "salary_slip_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("employee_id") ON DELETE RESTRICT ON UPDATE CASCADE;
