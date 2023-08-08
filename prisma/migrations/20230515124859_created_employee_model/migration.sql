-- CreateTable
CREATE TABLE "employee" (
    "id" TEXT NOT NULL,
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

    CONSTRAINT "employee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "employee_personal_email_key" ON "employee"("personal_email");

-- CreateIndex
CREATE UNIQUE INDEX "employee_company_email_key" ON "employee"("company_email");
