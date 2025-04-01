import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export const studentsController = {
  async getAllStudents(): Promise<Response> {
    const students = await prisma.students.findMany();
    return new Response(JSON.stringify(students), { status: 200 });
  },
  async getStudentById(id: string): Promise<Response> {
    const student = await prisma.students.findUnique({ where: { id: Number(id) } });
    if (!student) {
      return new Response('Student not found', { status: 404 });
    }
    return new Response(JSON.stringify(student), { status: 200 });
  },
  async createStudent(req: Request): Promise<Response> {
    try {
      const body = await req.json();

      // Validate the input data
      if (!body.name || !body.age || !body.grade) {
        return new Response('Missing required fields: name, age, or grade', { status: 400 });
      }

      // Ensure age is a number
      const age = Number(body.age);
      if (isNaN(age)) {
        return new Response('Age must be a valid number', { status: 400 });
      }

      // Create the new student
      const newStudent = await prisma.students.create({
        data: {
          name: body.name,
          age: age,
          grade: body.grade,
        },
      });

      return new Response(JSON.stringify(newStudent), { status: 201 });
    } catch (error) {
      console.error('Error creating student:', error);
      return new Response('Failed to create student', { status: 500 });
    }
  },

  async deleteStudent(id: string): Promise<Response> {
    await prisma.students.delete({ where: { id: Number(id) } });
    return new Response('Student deleted', { status: 200 });
  },
};