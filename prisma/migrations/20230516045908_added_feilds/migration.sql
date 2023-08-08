/*
  Warnings:

  - You are about to drop the `employee` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "employee";

-- CreateTable
CREATE TABLE "Employees" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "version" INTEGER DEFAULT 1,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "phone_number" INTEGER NOT NULL,
    "personal_email" TEXT NOT NULL,
    "company_email" TEXT NOT NULL,
    "date_of_birth" TIMESTAMP(3) NOT NULL,
    "date_of_joining" TIMESTAMP(3) NOT NULL,
    "alternate_phone_number" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "aadhar" TEXT,
    "other_id_proof" TEXT,

    CONSTRAINT "Employees_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employees_personal_email_key" ON "Employees"("personal_email");

-- CreateIndex
CREATE UNIQUE INDEX "Employees_company_email_key" ON "Employees"("company_email");
