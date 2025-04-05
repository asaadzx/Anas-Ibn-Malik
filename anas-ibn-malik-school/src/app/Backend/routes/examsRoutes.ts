import { Request } from "bun";
import { getAllExams, getExamById, createExam, updateExam, deleteExam } from "../controllers/examsControllers";

export async function examsRoutes(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const pathname = url.pathname;
  const method = req.method;

  if (method === "GET" && pathname === "/exams") {
    return await getAllExams();
  } else if (method === "GET" && pathname.startsWith("/exams/")) {
    const id = pathname.split("/")[2];
    return await getExamById(id);
  } else if (method === "POST" && pathname === "/exams") {
    const body = await req.json();
    return await createExam(body);
  } else if (method === "PUT" && pathname.startsWith("/exams/")) {
    const id = pathname.split("/")[2];
    const body = await req.json();
    return await updateExam(id, body);
  } else if (method === "DELETE" && pathname.startsWith("/exams/")) {
    const id = pathname.split("/")[2];
    return await deleteExam(id);
  }

  return new Response(JSON.stringify({ error: "Route not found" }), { status: 404 });
}