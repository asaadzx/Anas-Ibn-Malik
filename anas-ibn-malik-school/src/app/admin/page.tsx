"use client";

import { useState, useEffect } from "react";

export default function Admin() {
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: "", national_id: "", password: "" });
  const [newClass, setNewClass] = useState({ class_name: "",year: 0, grade: ""});
  const [newTeacher, setNewTeacher] = useState({ name: "", subject: "" });
  const [loading, setLoading] = useState(false);

  // Fetch all students
  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:1365/students");
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch all classes
  const fetchClasses = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:1365/classes");
      const data = await response.json();
      setClasses(data);
    } catch (error) {
      console.error("Error fetching classes:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch all teachers
  const fetchTeachers = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:1365/teachers");
      const data = await response.json();
      setTeachers(data);
    } catch (error) {
      console.error("Error fetching teachers:", error);
    } finally {
      setLoading(false);
    }
  };

  // Add a new student
  const addStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await fetch("http://localhost:1365/students", {
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

  // Add a new class
  const addClass = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await fetch("http://localhost:1365/classes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newClass),
      });
      setNewClass({ class_name: "", year: 0 ,grade: ""});
      fetchClasses();
    } catch (error) {
      console.error("Error adding class:", error);
    } finally {
      setLoading(false);
    }
  };

  // Add a new teacher
  const addTeacher = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await fetch("http://localhost:1365/teachers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTeacher),
      });
      setNewTeacher({ name: "", subject: "" });
      fetchTeachers();
    } catch (error) {
      console.error("Error adding teacher:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
    fetchClasses();
    fetchTeachers();
  }, []);

  return (
    <div className="min-h-screen p-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
      </header>
      <main className="max-w-4xl mx-auto">
        {/* Add New Student */}
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

        {/* Add New Class */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Add New Class</h2>
          <form onSubmit={addClass} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Class Name"
              value={newClass.class_name}
              onChange={(e) => setNewClass({ ...newClass, class_name: e.target.value })}
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              placeholder="Year"
              value={newClass.year}
              onChange={(e) => setNewClass({ ...newClass, year: parseInt(e.target.value, 10) || 0 })}
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              placeholder="Grade"
              value={newClass.grade}
              onChange={(e) => setNewClass({ ...newClass, grade: e.target.value })}
              className="border p-2 rounded"
              required
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Add Class
            </button>
          </form>
        </section>

        {/* Add New Teacher */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Add New Teacher</h2>
          <form onSubmit={addTeacher} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Teacher Name"
              value={newTeacher.name}
              onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              value={newTeacher.subject}
              onChange={(e) => setNewTeacher({ ...newTeacher, subject: e.target.value })}
              className="border p-2 rounded"
              required
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Add Teacher
            </button>
          </form>
        </section>

        {/* Display Students */}
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
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Display Classes */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Class List</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul className="space-y-4">
              {classes.map((classItem: any, index: number) => (
                <li
                  key={classItem.class_id || index}
                  className="flex justify-between items-center border p-4 rounded"
                >
                  <div>
                    <p className="font-bold">{classItem.name}</p>
                    <p>Class Name: {classItem.class_name}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Display Teachers */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Teacher List</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul className="space-y-4">
              {teachers.map((teacher: any, index: number) => (
                <li
                  key={teacher.teacher_id || index}
                  className="flex justify-between items-center border p-4 rounded"
                >
                  <div>
                    <p className="font-bold">{teacher.name}</p>
                    <p>Subject: {teacher.subject}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}
