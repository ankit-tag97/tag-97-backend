/*
  Warnings:

  - You are about to drop the `Employees` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Employees";

-- CreateTable
CREATE TABLE "employees" (
    "id" TEXT NOT NULL,
    "employee_id" VARCHAR,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "deleted_at" TIMESTAMPTZ(6),
    "version" INTEGER DEFAULT 1,
    "first_name" VARCHAR NOT NULL,
    "last_name" VARCHAR NOT NULL,
    "date_of_employement" TIMESTAMPTZ(6),
    "date_of_birth" TIMESTAMP(6) NOT NULL,
    "date_of_joining" TIMESTAMP(6) NOT NULL,
    "phone_number" VARCHAR NOT NULL,
    "alternate_phone_number" VARCHAR NOT NULL,
    "personal_email" VARCHAR NOT NULL,
    "company_email" VARCHAR NOT NULL,
    "gender" VARCHAR NOT NULL,
    "city" VARCHAR NOT NULL,
    "state" VARCHAR NOT NULL,
    "street" VARCHAR NOT NULL,
    "pincode" VARCHAR NOT NULL,
    "profile_image_url" VARCHAR NOT NULL,
    "aadhar" VARCHAR NOT NULL,
    "other_id_proof" VARCHAR NOT NULL,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "role" (
    "id" TEXT NOT NULL,
    "name" VARCHAR NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "employees_personal_email_key" ON "employees"("personal_email");

-- CreateIndex
CREATE UNIQUE INDEX "employees_company_email_key" ON "employees"("company_email");

-- CreateIndex
CREATE UNIQUE INDEX "role_name_key" ON "role"("name");
