import { Request } from "bun";
import { getAllExamResults, getExamResultById, createExamResult, updateExamResult, deleteExamResult } from "../controllers/examResultsControllers";

export async function examResultsRoutes(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const pathname = url.pathname;
  const method = req.method;

  if (method === "GET" && pathname === "/exam-results") {
    return await getAllExamResults();
  } else if (method === "GET" && pathname.startsWith("/exam-results/")) {
    const id = pathname.split("/")[2];
    return await getExamResultById(id);
  } else if (method === "POST" && pathname === "/exam-results") {
    const body = await req.json();
    return await createExamResult(body);
  } else if (method === "PUT" && pathname.startsWith("/exam-results/")) {
    const id = pathname.split("/")[2];
    const body = await req.json();
    return await updateExamResult(id, body);
  } else if (method === "DELETE" && pathname.startsWith("/exam-results/")) {
    const id = pathname.split("/")[2];
    return await deleteExamResult(id);
  }

  return new Response(JSON.stringify({ error: "Route not found" }), { status: 404 });
}