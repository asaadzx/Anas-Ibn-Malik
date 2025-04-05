import { Request } from "bun";
import { getAllClasses, getClassById, createClass, updateClass, deleteClass } from "../controllers/examResultsControllers";

export async function examResultsRoutes(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const pathname = url.pathname;
  const method = req.method;

  if (method === "GET" && pathname === "/exam-results") {
    return await getAllClasses();
  } else if (method === "GET" && pathname.startsWith("/exam-results/")) {
    const id = pathname.split("/")[2];
    return await getClassById(id);
  } else if (method === "POST" && pathname === "/exam-results") {
    const body = await req.json();
    return await createClass(body);
  } else if (method === "PUT" && pathname.startsWith("/exam-results/")) {
    const id = pathname.split("/")[2];
    const body = await req.json();
    return await updateClass(id, body);
  } else if (method === "DELETE" && pathname.startsWith("/exam-results/")) {
    const id = pathname.split("/")[2];
    return await deleteClass(id);
  }

  return new Response(JSON.stringify({ error: "Route not found" }), { status: 404 });
}