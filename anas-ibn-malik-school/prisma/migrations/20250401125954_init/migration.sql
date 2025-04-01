-- CreateTable
CREATE TABLE "students" (
    "id" SERIAL NOT NULL,
    "create_time" DATE,
    "name" VARCHAR(255),
    "grade" VARCHAR(255),
    "age" INTEGER NOT NULL,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);
