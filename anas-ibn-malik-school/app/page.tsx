"use client";

import { useState, useEffect } from "react";

export default function Admin() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: "", age: "", grade: "" });
  const [loading, setLoading] = useState(false);

  // Fetch all students
  const fetchStudents = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:3000/students");
    const data = await response.json();
    setStudents(data);
    setLoading(false);
  };

  // Add a new student
  const addStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await fetch("http://localhost:3000/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStudent),
    });
    setNewStudent({ name: "", age: "", grade: "" });
    fetchStudents();
  };

  // Delete a student
  const deleteStudent = async (id: number) => {
    setLoading(true);
    await fetch(`http://localhost:3000/students/${id}`, { method: "DELETE" });
    fetchStudents();
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="min-h-screen p-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
        <p className="text-lg mt-2">Manage students in the school database.</p>
      </header>
      <main className="max-w-4xl mx-auto">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Add New Student</h2>
          <form onSubmit={addStudent} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              value={newStudent.name}
              onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
              className="border p-2 rounded"
              required
            />
            <input
              type="number"
              placeholder="Age"
              value={newStudent.age}
              onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              placeholder="Grade"
              value={newStudent.grade}
              onChange={(e) => setNewStudent({ ...newStudent, grade: e.target.value })}
              className="border p-2 rounded"
              required
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Add Student
            </button>
          </form>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Student List</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul className="space-y-4">
              {students.map((student: any) => (
                <li
                  key={student.id}
                  className="flex justify-between items-center border p-4 rounded"
                >
                  <div>
                    <p className="font-bold">{student.name}</p>
                    <p>Age: {student.age}</p>
                    <p>Grade: {student.grade}</p>
                  </div>
                  <button
                    onClick={() => deleteStudent(student.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}