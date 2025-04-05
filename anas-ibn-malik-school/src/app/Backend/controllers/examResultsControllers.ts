import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Define input interfaces for better type safety
interface CreateExamResultInput {
  student_id: number;
  exam_id: number;
  score: number;
  grade?: string;
  remarks?: string;
}

interface UpdateExamResultInput {
  student_id?: number;
  exam_id?: number;
  score?: number;
  grade?: string;
  remarks?: string;
}

// Get all exam results
export async function getAllExamResults(): Promise<Response> {
  try {
    const examResults = await prisma.exam_Results.findMany();
    return new Response(JSON.stringify(examResults), { status: 200 });
  } catch (error) {
    console.error("Error fetching exam results:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to fetch exam results",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500 }
    );
  }
}

// Get an exam result by ID
export async function getExamResultById(id: string): Promise<Response> {
  try {
    const examResultId = parseInt(id, 10);
    if (isNaN(examResultId)) {
      return new Response(
        JSON.stringify({ error: "Invalid exam result ID" }),
        { status: 400 }
      );
    }

    const examResult = await prisma.exam_Results.findUnique({
      where: { result_id: examResultId },
    });

    if (!examResult) {
      return new Response(
        JSON.stringify({ error: "Exam result not found" }),
        { status: 404 }
      );
    }

    return new Response(JSON.stringify(examResult), { status: 200 });
  } catch (error) {
    console.error("Error fetching exam result:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to fetch exam result",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500 }
    );
  }
}

// Create a new exam result
export async function createExamResult(data: CreateExamResultInput): Promise<Response> {
  try {
    if (!data.student_id || !data.exam_id || data.score === undefined) {
      return new Response(
        JSON.stringify({
          error: "Invalid input",
          details: "Student ID, exam ID, and score are required",
        }),
        { status: 400 }
      );
    }

    const newExamResult = await prisma.exam_Results.create({ data });
    return new Response(JSON.stringify(newExamResult), { status: 201 });
  } catch (error) {
    console.error("Error creating exam result:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to create exam result",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500 }
    );
  }
}

// Update an exam result
export async function updateExamResult(
  id: string,
  data: UpdateExamResultInput
): Promise<Response> {
  try {
    const examResultId = parseInt(id, 10);
    if (isNaN(examResultId)) {
      return new Response(
        JSON.stringify({ error: "Invalid exam result ID" }),
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

    const updatedExamResult = await prisma.exam_Results.update({
      where: { id: examResultId },
      data,
    });

    return new Response(JSON.stringify(updatedExamResult), { status: 200 });
  } catch (error) {
    console.error("Error updating exam result:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to update exam result",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500 }
    );
  }
}

// Delete an exam result
export async function deleteExamResult(id: string): Promise<Response> {
  try {
    const examResultId = parseInt(id, 10);
    if (isNaN(examResultId)) {
      return new Response(
        JSON.stringify({ error: "Invalid exam result ID" }),
        { status: 400 }
      );
    }

    await prisma.exam_Results.delete({ where: { id: examResultId } });

    return new Response(
      JSON.stringify({ message: "Exam result deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting exam result:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to delete exam result",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500 }
    );
  }
}
