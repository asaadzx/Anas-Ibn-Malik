-- CreateTable
CREATE TABLE "Teachers" (
    "teacher_id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(15),
    "gmail" VARCHAR(100),

    CONSTRAINT "Teachers_pkey" PRIMARY KEY ("teacher_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Teachers_gmail_key" ON "Teachers"("gmail");
