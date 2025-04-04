import { Request } from "bun";
import { getAllClasses, getClassById, createClass, updateClass, deleteClass } from "../controllers/examsControllers";

export async function examsRoutes(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const pathname = url.pathname;
  const method = req.method;

  if (method === "GET" && pathname === "/students") {
    return await getAllClasses();
  } else if (method === "GET" && pathname.startsWith("/students/")) {
    const id = pathname.split("/")[2];
    return await getClassById(id);
  } else if (method === "POST" && pathname === "/students") {
    const body = await req.json();
    return await createClass(body);
  } else if (method === "PUT" && pathname.startsWith("/students/")) {
    const id = pathname.split("/")[2];
    const body = await req.json();
    return await updateClass(id, body);
  } else if (method === "DELETE" && pathname.startsWith("/students/")) {
    const id = pathname.split("/")[2];
    return await deleteClass(id);
  }

  return new Response(JSON.stringify({ error: "Route not found" }), { status: 404 });
}