/*
  Warnings:

  - You are about to drop the column `username` on the `Mentor` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Mentor_username_key";

-- AlterTable
ALTER TABLE "Mentor" DROP COLUMN "username";
