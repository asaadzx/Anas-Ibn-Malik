import { serve } from 'bun';
import { studentsRoutes } from './routes/studentsRoutes';

const PORT = 3000;

const server = serve({
  port: PORT,
  fetch: (req) => {
    const url = new URL(req.url);
    if (url.pathname.startsWith('/students')) {
      return studentsRoutes(req);
    }
    return new Response('Not Found', { status: 404 });
  },
});

console.log(`Prisma Client initialized`);
console.log(`Server starting on http://localhost:${PORT}/students`);
console.log(`Server starting on http://localhost:${PORT}/students/2`);
console.log(`Server starting on http://localhost:${PORT}/students/:id/delete`);
console.log(`Server starting on http://localhost:${PORT}/students/:id/update`);
console.log(`Server starting on http://localhost:${PORT}/students/:id/get`);
console.log(`Server running on http://localhost:${PORT}`);