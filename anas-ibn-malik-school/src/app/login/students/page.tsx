"use client"

import React, { use, useState } from "react";

const LoginPage = () => {
  const [role, setRole] = useState<"admin" | "student" | "teacher" | null>(null);

  const renderForm = () => {
    switch (role) {
      case "admin":
        return (
          <form>
            <h2>Admin Login</h2>
            <div>
              <label>Name:</label>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" placeholder="Enter your password" required />
            </div>
            <button type="submit">Login</button>
          </form>
        );
      case "student":
      case "teacher":
        return (
          <form>
            <h2>{role === "student" ? "Student Login" : "Teacher Login"}</h2>
            <div>
              <label>Name:</label>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div>
              <label>National ID:</label>
              <input type="text" placeholder="Enter your national ID" required />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" placeholder="Enter your password" required />
            </div>
            <div>
              <label>Phone or Gmail:</label>
              <input type="text" placeholder="Enter your phone or Gmail" required />
            </div>
            <button type="submit">Login</button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <button onClick={() => setRole("admin")}>Admin</button>
        <button onClick={() => setRole("student")}>Student</button>
        <button onClick={() => setRole("teacher")}>Teacher</button>
      </div>
      <div>{renderForm()}</div>
    </div>
  );
};

export default LoginPage;