"use client";

import { useState, useEffect } from "react";

export default function Admin() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: "", national_id: "", password: "" });
  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // Fetch all students
  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/students");
      console.log("Raw response:", response);
      const data = await response.json();
      console.log("Parsed data:", data);
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch a specific student by ID
  const fetchStudentById = async (id: number) => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3000/students/${id}`);
      const data = await response.json();
      setSelectedStudent(data);
    } catch (error) {
      console.error("Error fetching student:", error);
    } finally {
      setLoading(false);
    }
  };

  // Add a new student
  const addStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await fetch("http://localhost:3000/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newStudent),
      });
      setNewStudent({ name: "", national_id: "", password: "" });
      fetchStudents();
    } catch (error) {
      console.error("Error adding student:", error);
    } finally {
      setLoading(false);
    }
  };

  // Update a student's information
  const updateStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await fetch(`http://localhost:3000/students/${selectedStudent.student_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(selectedStudent),
      });
      setSelectedStudent(null); // Clear the selected student after update
      fetchStudents(); // Refresh the student list
    } catch (error) {
      console.error("Error updating student:", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete a student
  const deleteStudent = async (id: number) => {
    try {
      setLoading(true);
      await fetch(`http://localhost:3000/students/${id}`, { method: "DELETE" });
      fetchStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="min-h-screen p-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
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
              type="text"
              placeholder="National ID"
              value={newStudent.national_id}
              onChange={(e) => setNewStudent({ ...newStudent, national_id: e.target.value })}
              className="border p-2 rounded"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={newStudent.password}
              onChange={(e) => setNewStudent({ ...newStudent, password: e.target.value })}
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
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Student List</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul className="space-y-4">
              {students.map((student: any, index: number) => (
                <li
                  key={student.student_id || index}
                  className="flex justify-between items-center border p-4 rounded"
                >
                  <div>
                    <p className="font-bold">{student.name}</p>
                    <p>National ID: {student.national_id}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => fetchStudentById(student.student_id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      View
                    </button>
                    <button
                      onClick={() => deleteStudent(student.student_id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        {selectedStudent && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Update Student</h2>
            <form onSubmit={updateStudent} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                value={selectedStudent.name}
                onChange={(e) =>
                  setSelectedStudent({ ...selectedStudent, name: e.target.value })
                }
                className="border p-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="National ID"
                value={selectedStudent.national_id}
                onChange={(e) =>
                  setSelectedStudent({ ...selectedStudent, national_id: e.target.value })
                }
                className="border p-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Phone"
                value={selectedStudent.phone || ""}
                onChange={(e) =>
                  setSelectedStudent({ ...selectedStudent, phone: e.target.value })
                }
                className="border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Gmail"
                value={selectedStudent.gmail || ""}
                onChange={(e) =>
                  setSelectedStudent({ ...selectedStudent, gmail: e.target.value })
                }
                className="border p-2 rounded"
              />
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Update Student
              </button>
            </form>
          </section>
        )}
      </main>
    </div>
  );
}
