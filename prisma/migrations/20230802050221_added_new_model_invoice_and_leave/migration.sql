-- CreateTable
CREATE TABLE "employees_invoce" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "deleted_at" TIMESTAMPTZ(6),
    "employee_id" VARCHAR NOT NULL,
    "name" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "designation" VARCHAR NOT NULL,
    "paymentDue" TIMESTAMPTZ(6) NOT NULL,
    "location" VARCHAR NOT NULL,
    "mode_of_payment" VARCHAR NOT NULL,
    "basic_salary" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "over_time" INTEGER NOT NULL DEFAULT 0,
    "paid_leave" INTEGER NOT NULL DEFAULT 0,
    "insentive" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "security_amount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "professional_tax" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "absent" INTEGER NOT NULL DEFAULT 0,
    "advance_withdrawal" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "total_deduction" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "description" VARCHAR NOT NULL,
    "payment_term" INTEGER NOT NULL DEFAULT 0,
    "total_amount_paid" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "employees_invoce_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leave" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "deleted_at" TIMESTAMPTZ(6),
    "employee_id" VARCHAR NOT NULL,
    "name" VARCHAR NOT NULL,
    "leave_date" TIMESTAMPTZ(6) NOT NULL,
    "noOfDays" INTEGER NOT NULL DEFAULT 0,
    "reasonForLeave" VARCHAR NOT NULL,
    "description" VARCHAR NOT NULL,

    CONSTRAINT "leave_pkey" PRIMARY KEY ("id")
);
