-- CreateTable
CREATE TABLE "Faq" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Faq" ADD FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
