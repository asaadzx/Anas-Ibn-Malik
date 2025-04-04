import { Request } from "bun";
import { getAllTeachers, getTeachersById, createTeachers, updateTeachers, deleteTeachers } from "../controllers/teacherControllers";

export async function teachersRoutes(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const pathname = url.pathname;
  const method = req.method;

  if (method === "GET" && pathname === "/teachers") {
    return await getAllTeachers();
  } else if (method === "GET" && pathname.startsWith("/teachers/")) {
    const id = pathname.split("/")[2];
    return await getTeachersById(id);
  } else if (method === "POST" && pathname === "/teachers") {
    const body = await req.json();
    return await createTeachers(body);
  } else if (method === "PUT" && pathname.startsWith("/teachers/")) {
    const id = pathname.split("/")[2];
    const body = await req.json();
    return await updateTeachers(id, body);
  } else if (method === "DELETE" && pathname.startsWith("/teachers/")) {
    const id = pathname.split("/")[2];
    return await deleteTeachers(id);
  }

  return new Response(JSON.stringify({ error: "Route not found" }), { status: 404 });
}