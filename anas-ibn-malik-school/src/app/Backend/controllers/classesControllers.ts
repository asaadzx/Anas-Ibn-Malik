import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Define input interfaces for better type safety
interface CreateClassInput {
  name: string;
  teacher_id?: number;
  level?: string;
  section?: string;
}

interface UpdateClassInput {
  name?: string;
  teacher_id?: number;
  level?: string;
  section?: string;
}

export async function getAllClasses(): Promise<Response> {
  const classes = await prisma.classes.findMany();
  return new Response(JSON.stringify(classes), { status: 200 });
}

export async function getClassById(id: string): Promise<Response> {
  const classId = parseInt(id, 10);
  if (isNaN(classId)) {
    return new Response(JSON.stringify({ error: "Invalid class ID" }), { status: 400 });
  }

  const classData = await prisma.classes.findUnique({ where: { class_id: classId } });
  if (!classData) {
    return new Response(JSON.stringify({ error: "Class not found" }), { status: 404 });
  }
  return new Response(JSON.stringify(classData), { status: 200 });
}

export async function createClass(data: CreateClassInput): Promise<Response> {
  if (!data.name) {
    return new Response(
      JSON.stringify({ error: "Class name is required" }),
      { status: 400 }
    );
  }

  const newClass = await prisma.classes.create({
    data: {
      class_name: data.name,
      year: new Date().getFullYear(),
      grade: "default-grade", 
    },
  });
  return new Response(JSON.stringify(newClass), { status: 201 });
}

export async function updateClass(id: string, data: UpdateClassInput): Promise<Response> {
  const classId = parseInt(id, 10);
  if (isNaN(classId)) {
    return new Response(JSON.stringify({ error: "Invalid class ID" }), { status: 400 });
  }

  if (Object.keys(data).length === 0) {
    return new Response(
      JSON.stringify({ error: "No fields provided for update" }),
      { status: 400 }
    );
  }

  const updatedClass = await prisma.classes.update({
    where: { class_id: classId },
    data,
  });
  return new Response(JSON.stringify(updatedClass), { status: 200 });
}

export async function deleteClass(id: string): Promise<Response> {
  const classId = parseInt(id, 10);
  if (isNaN(classId)) {
    return new Response(JSON.stringify({ error: "Invalid class ID" }), { status: 400 });
  }

  await prisma.classes.delete({ where: { class_id: classId } });
  return new Response(JSON.stringify({ message: "Class deleted successfully" }), { status: 200 });
}