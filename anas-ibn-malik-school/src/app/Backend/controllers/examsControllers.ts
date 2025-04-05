import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Define input interfaces for better type safety
interface CreateExamInput {
  name: string;
  date: string; // ISO 8601 format (YYYY-MM-DD)
  subject: string;
  teacher_id?: number;
}

interface UpdateExamInput {
  name?: string;
  date?: string;
  subject?: string;
  teacher_id?: number;
}

// Get all exams
export async function getAllExams(): Promise<Response> {
  try {
    const exams = await prisma.exams.findMany();
    return new Response(JSON.stringify(exams), { status: 200 });
  } catch (error) {
    console.error("Error fetching exams:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to fetch exams",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500 }
    );
  }
}

// Get an exam by ID
export async function getExamById(id: string): Promise<Response> {
  try {
    const examId = parseInt(id, 10);
    if (isNaN(examId)) {
      return new Response(
        JSON.stringify({ error: "Invalid exam ID" }),
        { status: 400 }
      );
    }

    const exam = await prisma.exams.findUnique({ where: { id: examId } });
    if (!exam) {
      return new Response(
        JSON.stringify({ error: "Exam not found" }),
        { status: 404 }
      );
    }

    return new Response(JSON.stringify(exam), { status: 200 });
  } catch (error) {
    console.error("Error fetching exam:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to fetch exam",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500 }
    );
  }
}

// Create a new exam
export async function createExam(data: CreateExamInput): Promise<Response> {
  try {
    if (!data.name || !data.date || !data.subject) {
      return new Response(
        JSON.stringify({
          error: "Invalid input",
          details: "Name, date, and subject are required",
        }),
        { status: 400 }
      );
    }

    const newExam = await prisma.exams.create({ data });
    return new Response(JSON.stringify(newExam), { status: 201 });
  } catch (error) {
    console.error("Error creating exam:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to create exam",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500 }
    );
  }
}

// Update an exam
export async function updateExam(id: string, data: UpdateExamInput): Promise<Response> {
  try {
    const examId = parseInt(id, 10);
    if (isNaN(examId)) {
      return new Response(
        JSON.stringify({ error: "Invalid exam ID" }),
        { status: 400 }
      );
    }

    if (Object.keys(data).length === 0) {
      return new Response(
        JSON.stringify({
          error: "No fields provided for update",
        }),
        { status: 400 }
      );
    }

    const updatedExam = await prisma.exams.update({
      where: { id: examId },
      data,
    });

    return new Response(JSON.stringify(updatedExam), { status: 200 });
  } catch (error) {
    console.error("Error updating exam:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to update exam",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500 }
    );
  }
}

// Delete an exam
export async function deleteExam(id: string): Promise<Response> {
  try {
    const examId = parseInt(id, 10);
    if (isNaN(examId)) {
      return new Response(
        JSON.stringify({ error: "Invalid exam ID" }),
        { status: 400 }
      );
    }

    await prisma.exams.delete({ where: { id: examId } });

    return new Response(
      JSON.stringify({ message: "Exam deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting exam:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to delete exam",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500 }
    );
  }
}