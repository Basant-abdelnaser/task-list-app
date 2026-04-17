#  Task List App

A simple and modern **Task Management Application** built with **Next.js (App Router)**, **Drizzle ORM**, and **PostgreSQL**.  
It allows users to create, update, delete, and manage tasks with different statuses.

---

## Features

-  Add new tasks
-  Edit existing tasks
-  Delete tasks
-  Task status management (e.g., TODO, IN_PROGRESS, DONE)
-  Real-time UI updates using Next.js Server Actions
-  Clean and responsive UI with Tailwind CSS

---

##  Tech Stack

- **Frontend:** Next.js 16 (App Router)
- **Backend:** Next.js Server Actions
- **Database:** PostgreSQL
- **ORM:** Drizzle ORM
- **Styling:** Tailwind CSS

---

##  Project Structure
task-list-app/
│── app/
│ ├── page.tsx # Home page (task list)
│ ├── task/
│ │ ├── add/ # Add task page
│ │ ├── [id]/ # Task details page
│ │ └── /[id]/[edit] # Edit task page
│
│── db/
│ ├── schema.ts # Database schema
│ └── index.ts # DB connection
│
│── utils/
│ ├── actions.ts # Server actions (CRUD)
│ └── dtos.ts # Data types



---

##  Installation & Setup

### 1. Clone the repo

```bash
git clone https://github.com/your-username/task-list-app.git
cd task-list-app
npm install
Create a .env file in the root:
DATABASE_URL=postgresql://username:password@localhost:5432/TaskList
npm run dev
```
Key Concepts Used
-Server Actions in Next.js
-Database operations with Drizzle ORM
-Routing with App Router
-Data revalidation using revalidatePath
-Navigation using redirect
