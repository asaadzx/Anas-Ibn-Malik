import { Request } from "bun";
import { getAllClasses, getClassById, createClass, updateClass, deleteClass } from "../controllers/studentClassesControllers";

export async function studentClassesRoutes(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const pathname = url.pathname;
  const method = req.method;

  if (method === "GET" && pathname === "/student-classes") {
    return await getAllClasses();
  } else if (method === "GET" && pathname.startsWith("/student-classes/")) {
    const id = pathname.split("/")[2];
    return await getClassById(id);
  } else if (method === "POST" && pathname === "/student-classes") {
    const body = await req.json();
    return await createClass(body);
  } else if (method === "PUT" && pathname.startsWith("/student-classes/")) {
    const id = pathname.split("/")[2];
    const body = await req.json();
    return await updateClass(id, body);
  } else if (method === "DELETE" && pathname.startsWith("/student-classes/")) {
    const id = pathname.split("/")[2];
    return await deleteClass(id);
  }

  return new Response(JSON.stringify({ error: "Route not found" }), { status: 404 });
}