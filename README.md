# 🎓 Anas Ibn Malik School Management System

Welcome to the **Anas Ibn Malik School Management System** repository! This project is a full-stack application designed to manage students, teachers, attendance, grades, and more. It uses modern technologies to provide a seamless experience for both administrators and users.

---

## 🚀 Technologies and Tools

### 🛠️ Backend:
- ⚡ **Bun**: A fast Typescript runtime
- 📝 **TypeScript**: For type-safe programming
- 📦 **Prisma**: ORM for database interaction
- 🗄️ **PostgreSQL**: Relational database
- 🔐 **JWT**: For secure authentication

### 🎨 Frontend:
- ⚛️ **Next.js**: React framework for building the UI
- 📝 **TypeScript**: For type-safe programming
- 💅 **TailwindCSS**: For styling the UI

### 🧰 Development Tools:
- 🌀 **Git**: Version control
- 🖥️ **VS Code**: Recommended IDE
- 🐳 **Docker**: Optional, for containerization

### ☁️ Hosting:
- 🌐 **Vercel**: For hosting the Next.js application
- 🗄️ **Supabase/Railway**: For PostgreSQL database hosting 

---

## 📋 Features
- 🧑‍🎓 **Student Management**: Add, edit, delete, and view students.
- 🧑‍🏫 **Teacher Management**: Manage teacher profiles.
- 📅 **Attendance Tracking**: Record and view attendance.
- 📝 **Grade Management**: Assign and view grades.
- 🔐 **Authentication**: Secure login with JWT.

---

## 🛠️ Development Steps

### 1️⃣ Project Setup:
- Clone the repository:
  ```bash
  git clone https://github.com/your-username/Anas-Ibn-Malik.git
  cd Anas-Ibn-Malik
- Install dependencies:
  ```bash
  bun install
  ```
### 2️⃣ Backend Development:
- Configure Prisma:
    - Update the DATABASE_URL in .env with your PostgreSQL connection string.
    - Run Prisma migrations:
  ```bash
  bun prisma migrate dev --name init
  ```
  - Start the backend server:
  ```bash
  bun run main.ts
  ```
  
### 3️⃣ Frontend Development:
- Navigate to the frontend directory (if applicable) and start the development server:
    ```bash
    bun run dev
    ```
- Open the app in your browser at [http://localhost:3000](http://localhost:3000).

---

## 🧑‍💻 How to Contribute

### 🛠️ Editing the Repository:
1. **Fork the Repository**:
     - Click the "Fork" button at the top-right corner of this page.

2. **Clone Your Fork**:
     ```bash
     git clone https://github.com/asaadzx/Anas-Ibn-Malik.git
     cd Anas-Ibn-Malik
     ```

3. **Create a New Branch**:
     ```bash
     git checkout -b your-branch-name
     ```

4. **Make Your Changes**:
     - Edit the code or documentation as needed.
     - Run the app locally to test your changes.

5. **Commit and Push**:
     ```bash
     git add .
     git commit -m "Your descriptive commit message"
     git push origin your-branch-name
     ```

6. **Submit a Pull Request**:
     - Go to the original repository and click "New Pull Request."
     - Provide a clear description of your changes.

---

## 📚 Documentation

### 📖 API Endpoints:
| Method | Endpoint          | Description              |
|--------|-------------------|--------------------------|
| GET    | /students         | Get all students         |
| POST   | /students         | Add a new student        |
| GET    | /students/:id     | Get a student by ID      |
| DELETE | /students/:id     | Delete a student by ID   |

---

### 🗂️ File Structure:
- Provide a clear and organized file structure for easy navigation.

---

### 🌟 Key Considerations:
- **Security**: Follow best practices for authentication and data protection.
- **Scalability**: Design the system to handle future growth.
- **User Experience**: Ensure the UI is intuitive and user-friendly.
- **Testing**: Write unit and integration tests for reliability.

---

## 🛡️ License
This project is licensed under the MIT License. See the (LICENSE)[https://www.gnu.org/licenses/] file for details.

---

## ❤️ Acknowledgments
Special thanks to asaadzx contributors and the open-source community for their support and inspiration.

---

## 📬 Contact
If you have any questions or suggestions, feel free to reach out:

- 🌐 Website: https://asaadzx.deno.dev/
