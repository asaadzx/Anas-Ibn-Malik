import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllTeachers(): Promise<Response> {
  const students = await prisma.teachers.findMany();
  return new Response(JSON.stringify(students), { status: 200 });
}

export async function getTeachersById(id: string): Promise<Response> {
  const student = await prisma.teachers.findUnique({ where: { teacher_id: parseInt(id) } });
  if (!student) {
    return new Response(JSON.stringify({ error: "Student not found" }), { status: 404 });
  }
  return new Response(JSON.stringify(student), { status: 200 });
}

export async function createTeachers(data: any): Promise<Response> {
  const newStudent = await prisma.teachers.create({ data });
  return new Response(JSON.stringify(newStudent), { status: 201 });
}

export async function updateTeachers(id: string, data: any): Promise<Response> {
  const updatedStudent = await prisma.teachers.update({ where: { teacher_id: parseInt(id) }, data });
  return new Response(JSON.stringify(updatedStudent), { status: 200 });
}

export async function deleteTeachers(id: string): Promise<Response> {
  await prisma.teachers.delete({ where: { teacher_id: parseInt(id) } });
  return new Response(JSON.stringify({ message: "Student deleted successfully" }), { status: 200 });
}