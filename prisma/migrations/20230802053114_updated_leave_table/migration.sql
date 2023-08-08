/*
  Warnings:

  - You are about to drop the column `paymentDue` on the `employees_invoce` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `leave` table. All the data in the column will be lost.
  - You are about to drop the column `leave_date` on the `leave` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `leave` table. All the data in the column will be lost.
  - You are about to drop the column `noOfDays` on the `leave` table. All the data in the column will be lost.
  - You are about to drop the column `reasonForLeave` on the `leave` table. All the data in the column will be lost.
  - Added the required column `paymentDeu` to the `employees_invoce` table without a default value. This is not possible if the table is not empty.
  - Added the required column `end_date_time` to the `leave` table without a default value. This is not possible if the table is not empty.
  - Added the required column `note` to the `leave` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reason_for_leave` to the `leave` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_date_time` to the `leave` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `leave` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "employees_invoce" DROP COLUMN "paymentDue",
ADD COLUMN     "paymentDeu" TIMESTAMPTZ(6) NOT NULL;

-- AlterTable
ALTER TABLE "leave" DROP COLUMN "description",
DROP COLUMN "leave_date",
DROP COLUMN "name",
DROP COLUMN "noOfDays",
DROP COLUMN "reasonForLeave",
ADD COLUMN     "end_date_time" TIMESTAMPTZ(6) NOT NULL,
ADD COLUMN     "note" VARCHAR NOT NULL,
ADD COLUMN     "reason_for_leave" VARCHAR NOT NULL,
ADD COLUMN     "start_date_time" TIMESTAMPTZ(6) NOT NULL,
ADD COLUMN     "status" VARCHAR NOT NULL;
