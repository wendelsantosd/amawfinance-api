/*
  Warnings:

  - You are about to drop the column `viwed` on the `notifications` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "notifications" DROP COLUMN "viwed",
ADD COLUMN     "viewed" BOOLEAN;
