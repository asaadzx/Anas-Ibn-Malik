/*
  Warnings:

  - You are about to drop the `students` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "students";

-- CreateTable
CREATE TABLE "Students" (
    "student_id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "national_id" VARCHAR(20) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(15),
    "gmail" VARCHAR(100),
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Students_pkey" PRIMARY KEY ("student_id")
);

-- CreateTable
CREATE TABLE "Classes" (
    "class_id" SERIAL NOT NULL,
    "class_name" VARCHAR(50) NOT NULL,
    "year" INTEGER NOT NULL,
    "grade" VARCHAR(10) NOT NULL,

    CONSTRAINT "Classes_pkey" PRIMARY KEY ("class_id")
);

-- CreateTable
CREATE TABLE "Exams" (
    "exam_id" SERIAL NOT NULL,
    "exam_name" VARCHAR(100) NOT NULL,
    "class_id" INTEGER NOT NULL,
    "exam_date" DATE NOT NULL,

    CONSTRAINT "Exams_pkey" PRIMARY KEY ("exam_id")
);

-- CreateTable
CREATE TABLE "Student_Classes" (
    "student_class_id" SERIAL NOT NULL,
    "student_id" INTEGER NOT NULL,
    "class_id" INTEGER NOT NULL,

    CONSTRAINT "Student_Classes_pkey" PRIMARY KEY ("student_class_id")
);

-- CreateTable
CREATE TABLE "Exam_Results" (
    "result_id" SERIAL NOT NULL,
    "student_class_id" INTEGER NOT NULL,
    "exam_id" INTEGER NOT NULL,
    "score" DECIMAL(5,2),

    CONSTRAINT "Exam_Results_pkey" PRIMARY KEY ("result_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Students_national_id_key" ON "Students"("national_id");

-- CreateIndex
CREATE UNIQUE INDEX "Students_gmail_key" ON "Students"("gmail");

-- AddForeignKey
ALTER TABLE "Exams" ADD CONSTRAINT "Exams_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "Classes"("class_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student_Classes" ADD CONSTRAINT "Student_Classes_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Students"("student_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student_Classes" ADD CONSTRAINT "Student_Classes_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "Classes"("class_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exam_Results" ADD CONSTRAINT "Exam_Results_student_class_id_fkey" FOREIGN KEY ("student_class_id") REFERENCES "Student_Classes"("student_class_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exam_Results" ADD CONSTRAINT "Exam_Results_exam_id_fkey" FOREIGN KEY ("exam_id") REFERENCES "Exams"("exam_id") ON DELETE CASCADE ON UPDATE CASCADE;
