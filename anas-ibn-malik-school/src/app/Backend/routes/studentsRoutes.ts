import { studentsController } from '../controllers/studentsController';

export async function studentsRoutes(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const method = req.method;

  if (url.pathname === '/students' && method === 'GET') {
    return studentsController.getAllStudents();
  } else if (url.pathname === '/students' && method === 'POST') {
    return studentsController.createStudent(req);
  } else if (url.pathname.startsWith('/students/') && method === 'GET') {
    const id = url.pathname.split('/')[2];
    return studentsController.getStudentById(id);
  } else if (url.pathname.startsWith('/students/') && method === 'DELETE') {
    const id = url.pathname.split('/')[2];
    return studentsController.deleteStudent(id);
  }

  return new Response('Not Found', { status: 404 });
}