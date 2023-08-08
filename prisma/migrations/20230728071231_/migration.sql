/*
  Warnings:

  - You are about to drop the column `delete_at` on the `assets` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "assets" DROP COLUMN "delete_at",
ADD COLUMN     "deleted_at" TIMESTAMPTZ(6),
ALTER COLUMN "created_at" DROP NOT NULL,
ALTER COLUMN "updated_at" DROP NOT NULL;
