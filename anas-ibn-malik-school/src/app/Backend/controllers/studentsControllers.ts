import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllStudents(): Promise<Response> {
  const students = await prisma.students.findMany();
  return new Response(JSON.stringify(students), { status: 200 });
}

export async function getStudentById(id: string): Promise<Response> {
  const student = await prisma.students.findUnique({ where: { student_id: parseInt(id) } });
  if (!student) {
    return new Response(JSON.stringify({ error: "Student not found" }), { status: 404 });
  }
  return new Response(JSON.stringify(student), { status: 200 });
}

export async function createStudent(data: any): Promise<Response> {
  const newStudent = await prisma.students.create({ data });
  return new Response(JSON.stringify(newStudent), { status: 201 });
}

export async function updateStudent(id: string, data: any): Promise<Response> {
  const updatedStudent = await prisma.students.update({ where: { student_id: parseInt(id) }, data });
  return new Response(JSON.stringify(updatedStudent), { status: 200 });
}

export async function deleteStudent(id: string): Promise<Response> {
  await prisma.students.delete({ where: { student_id: parseInt(id) } });
  return new Response(JSON.stringify({ message: "Student deleted successfully" }), { status: 200 });
}