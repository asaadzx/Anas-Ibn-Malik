import { serve } from "bun";
import { PrismaClient } from "@prisma/client";
import { exec } from 'child_process'; 
import { studentsRoutes } from './routes/studentsRoutes';
import { classesRoutes } from './routes/classesRoutes'; 
import { examsRoutes } from './routes/examsRoutes'; 
import { studentClassesRoutes } from './routes/studentClassesRoutes'; 
import { examResultsRoutes } from './routes/examResultsRoutes'; 
import { teachersRoutes } from './routes/teacherRoutes'; 

const prisma = new PrismaClient();
const PORT = 1365; // Use environment variable for port


const server = serve({
  port: PORT,
  fetch: async (req: Request) => { // Use standard Request type
    const url = new URL(req.url);
    const pathname = url.pathname;

    try {
      console.log(`Incoming request: ${req.method} ${req.url}`); // Basic logging
      // Delegate to specific routers based on path prefix
      if (pathname.startsWith("/students")) {
        return await studentsRoutes(req);
      } 
      else if (pathname.startsWith("/classes")) {
        return await classesRoutes(req);
      }
      else if (pathname.startsWith("/teachers")) {
        return await teachersRoutes(req);
      } 
      else if (pathname.startsWith("/exams")) {
        return await examsRoutes(req);
      } 
      else if (pathname.startsWith("/student-classes")) {
        return await studentClassesRoutes(req);
      } 
      else if (pathname.startsWith("/exam-results")) {
        return await examResultsRoutes(req);
      }
      
      // If no route matches
      return new Response(JSON.stringify({ error: "Not Found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
      
    } catch (error) {
      console.error("Error processing request:", error);
      // Provide a generic error response
      return new Response(JSON.stringify({ error: "Internal Server Error" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
  error(error: Error) {
    console.error("Server error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  },
});

function testAPI(apiUrl: string) {
  exec(`curl ${apiUrl}`, (error, stdout) => {
    if (error) {
      console.error(`Error executing curl: ${error.message}`);
      return ;
    }
    console.log(`\x1b[32m✔️ Succeeded:\x1b[0m ${stdout.trim()}`);
  }
  );
}

testAPI(`http://localhost:${PORT}/students`); 
testAPI(`http://localhost:${PORT}/classes`); 
testAPI(`http://localhost:${PORT}/teachers`);
testAPI(`http://localhost:${PORT}/exams`); 
testAPI(`http://localhost:${PORT}/student-classes`); 
testAPI(`http://localhost:${PORT}/exam-results`); 

console.log(`Server running on http://localhost:${PORT}`);