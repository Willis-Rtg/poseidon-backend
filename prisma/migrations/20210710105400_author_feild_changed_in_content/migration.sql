/*
  Warnings:

  - You are about to drop the column `userId` on the `Notice` table. All the data in the column will be lost.
  - Added the required column `authorId` to the `Notice` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Notice" DROP CONSTRAINT "Notice_userId_fkey";

-- AlterTable
ALTER TABLE "Notice" DROP COLUMN "userId",
ADD COLUMN     "authorId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Notice" ADD FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
