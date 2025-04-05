import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Define input interfaces for better type safety
interface CreateStudentClassInput {
  student_id: number;
  class_id: number;
  enrollment_date?: string; // Assuming date is a string in ISO format
}

interface UpdateStudentClassInput {
  student_id?: number;
  class_id?: number;
  enrollment_date?: string;
}

// Get all student-class relationships
export async function getAllStudentClasses(): Promise<Response> {
  try {
    const studentClasses = await prisma.student_Classes.findMany();
    return new Response(JSON.stringify(studentClasses), { status: 200 });
  } catch (error) {
    console.error("Error fetching student classes:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to fetch student classes",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500 }
    );
  }
}

// Get a student-class relationship by ID
export async function getStudentClassById(id: string): Promise<Response> {
  try {
    const studentClassId = parseInt(id, 10);
    if (isNaN(studentClassId)) {
      return new Response(
        JSON.stringify({ error: "Invalid student-class ID" }),
        { status: 400 }
      );
    }

    const studentClass = await prisma.student_Classes.findUnique({
      where: { id: studentClassId },
    });

    if (!studentClass) {
      return new Response(
        JSON.stringify({ error: "Student-class relationship not found" }),
        { status: 404 }
      );
    }

    return new Response(JSON.stringify(studentClass), { status: 200 });
  } catch (error) {
    console.error("Error fetching student-class relationship:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to fetch student-class relationship",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500 }
    );
  }
}

// Create a new student-class relationship
export async function createStudentClass(data: CreateStudentClassInput): Promise<Response> {
  try {
    if (!data.student_id || !data.class_id) {
      return new Response(
        JSON.stringify({
          error: "Invalid input",
          details: "Student ID and Class ID are required",
        }),
        { status: 400 }
      );
    }

    const newStudentClass = await prisma.student_Classes.create({ data });
    return new Response(JSON.stringify(newStudentClass), { status: 201 });
  } catch (error) {
    console.error("Error creating student-class relationship:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to create student-class relationship",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500 }
    );
  }
}

// Update a student-class relationship
export async function updateStudentClass(
  id: string,
  data: UpdateStudentClassInput
): Promise<Response> {
  try {
    const studentClassId = parseInt(id, 10);
    if (isNaN(studentClassId)) {
      return new Response(
        JSON.stringify({ error: "Invalid student-class ID" }),
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

    const updatedStudentClass = await prisma.student_Classes.update({
      where: { id: studentClassId },
      data,
    });

    return new Response(JSON.stringify(updatedStudentClass), { status: 200 });
  } catch (error) {
    console.error("Error updating student-class relationship:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to update student-class relationship",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500 }
    );
  }
}

// Delete a student-class relationship
export async function deleteStudentClass(id: string): Promise<Response> {
  try {
    const studentClassId = parseInt(id, 10);
    if (isNaN(studentClassId)) {
      return new Response(
        JSON.stringify({ error: "Invalid student-class ID" }),
        { status: 400 }
      );
    }

    await prisma.student_Classes.delete({ where: { id: studentClassId } });

    return new Response(
      JSON.stringify({ message: "Student-class relationship deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting student-class relationship:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to delete student-class relationship",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500 }
    );
  }
}