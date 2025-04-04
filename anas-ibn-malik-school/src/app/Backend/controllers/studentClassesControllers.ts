import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllClasses(): Promise<Response> {
  const classes = await prisma.student_Classes.findMany();
  return new Response(JSON.stringify(classes), { status: 200 });
}

export async function getClassById(id: string): Promise<Response> {
  const classData = await prisma.student_Classes.findUnique({ where: { id: parseInt(id) } });
  if (!classData) {
    return new Response(JSON.stringify({ error: "Class not found" }), { status: 404 });
  }
  return new Response(JSON.stringify(classData), { status: 200 });
}

export async function createClass(data: any): Promise<Response> {
  const newClass = await prisma.student_Classes.create({ data });
  return new Response(JSON.stringify(newClass), { status: 201 });
}

export async function updateClass(id: string, data: any): Promise<Response> {
  const updatedClass = await prisma.student_Classes.update({ where: { id: parseInt(id) }, data });
  return new Response(JSON.stringify(updatedClass), { status: 200 });
}

export async function deleteClass(id: string): Promise<Response> {
  await prisma.student_Classes.delete({ where: { id: parseInt(id) } });
  return new Response(JSON.stringify({ message: "Class deleted successfully" }), { status: 200 });
}