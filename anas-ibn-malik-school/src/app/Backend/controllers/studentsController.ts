import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const studentsController = {
  async getAllStudents(): Promise<Response> {
    try {
      const students = await prisma.students.findMany();
      return new Response(JSON.stringify(students), { status: 200 });
    } catch (error) {
      console.error('Error fetching students:', error);
      return new Response('Failed to fetch students', { status: 500 });
    }
  },

  async getStudentById(id: number): Promise<Response> {
    try {
      const student = await prisma.students.findUnique({ where: { student_id: id } });
      if (!student) {
        return new Response('Student not found', { status: 404 });
      }
      return new Response(JSON.stringify(student), { status: 200 });
    } catch (error) {
      console.error('Error fetching student by ID:', error);
      return new Response('Failed to fetch student', { status: 500 });
    }
  },

  async createStudent(req: Request): Promise<Response> {
    try {
      const body = await req.json();

      // Validate the input data
      if (!body.name || !body.national_id || !body.password) {
        return new Response('Missing required fields: name, national_id, or password', { status: 400 });
      }

      // Create the new student
      const newStudent = await prisma.students.create({
        data: {
          name: body.name,
          national_id: body.national_id,
          password: body.password,
          phone: body.phone || null,
          gmail: body.gmail || null,
        },
      });

      return new Response(JSON.stringify(newStudent), { status: 201 });
    } catch (error) {
      console.error('Error creating student:', error);
      return new Response('Failed to create student', { status: 500 });
    }
  },

  async deleteStudent(id: number): Promise<Response> {
    try {
      const student = await prisma.students.findUnique({ where: { student_id: id } });
      if (!student) {
        return new Response('Student not found', { status: 404 });
      }

      await prisma.students.delete({ where: { student_id: id } });
      return new Response('Student deleted', { status: 200 });
    } catch (error) {
      console.error('Error deleting student:', error);
      return new Response('Failed to delete student', { status: 500 });
    }
  },

  async updateStudent(req: Request, id: number): Promise<Response> {
    try {
      const body = await req.json();
      const updatedStudent = await prisma.students.update({
        where: { student_id: id },
        data: body,
      });
      return new Response(JSON.stringify(updatedStudent), { status: 200 });
    } catch (error) {
      console.error("Error updating student:", error);
      return new Response("Failed to update student", { status: 500 });
    }
  },
};