/*
  Warnings:

  - You are about to drop the `leave` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "leave";

-- CreateTable
CREATE TABLE "leaves" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "deleted_at" TIMESTAMPTZ(6),
    "employee_id" VARCHAR NOT NULL,
    "start_date_time" TIMESTAMPTZ(6) NOT NULL,
    "end_date_time" TIMESTAMPTZ(6) NOT NULL,
    "reason_for_leave" VARCHAR NOT NULL,
    "note" VARCHAR NOT NULL,
    "status" VARCHAR NOT NULL,

    CONSTRAINT "leaves_pkey" PRIMARY KEY ("id")
);
