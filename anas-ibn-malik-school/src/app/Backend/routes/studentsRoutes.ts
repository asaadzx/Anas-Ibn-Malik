import { Request } from "bun";
import { getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent } from "../controllers/studentsControllers";

export async function studentsRoutes(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const pathname = url.pathname;
  const method = req.method;

  if (method === "GET" && pathname === "/students") {
    return await getAllStudents();
  } else if (method === "GET" && pathname.startsWith("/students/")) {
    const id = pathname.split("/")[2];
    return await getStudentById(id);
  } else if (method === "POST" && pathname === "/students") {
    const body = await req.json();
    return await createStudent(body);
  } else if (method === "PUT" && pathname.startsWith("/students/")) {
    const id = pathname.split("/")[2];
    const body = await req.json();
    return await updateStudent(id, body);
  } else if (method === "DELETE" && pathname.startsWith("/students/")) {
    const id = pathname.split("/")[2];
    return await deleteStudent(id);
  }

  return new Response(JSON.stringify({ error: "Route not found" }), { status: 404 });
}