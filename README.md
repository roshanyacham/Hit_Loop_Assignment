# To-Do App

## Overview
This is a fully-featured To-Do application built with React. It allows users to add, view, edit, and delete tasks, as well as organize tasks by priority and completion status. Tasks are saved using `localStorage` for persistence across page refreshes.

## Features
- Add tasks with a title, description, priority, and due date.
- View tasks in a structured list format with filtering options for:
  - **All** tasks
  - **Completed** tasks
  - **Pending** tasks
- Edit existing tasks.
- Delete tasks.
- Mark tasks as completed or pending.
- Persistent storage using `localStorage`.
- Responsive design for both desktop and mobile devices.
- Dark mode support.
- Tasks categorized by priority levels: High, Medium, Low.

## Technologies Used
- React (Functional Components and Hooks)
- CSS (modular styles for each component)
- Context API for state management

## Setup and Run Instructions

### Prerequisites
Ensure you have the following installed on your system:
- Node.js (v14 or higher)
- npm or yarn

### Steps to Run

1. **Clone the Repository**
```bash
git clone https://github.com/your-repository-link/todo-app.git
cd Hit_Loop_Assignment
```

2. **Install Dependencies**
```bash
npm install
```

3. **Start the Application**
```bash
npm start
```
This will start the development server and open the app in your default browser. If it doesn't open automatically, navigate to `http://localhost:3000/` in your browser.

### Build for Production
To create a production-ready build, run:
```bash
npm run build
```
The optimized build will be created in the `build` directory.

## Additional Features Implemented

1. **Priority Levels**:
   - Tasks can be assigned a priority of High, Medium, or Low.
   - Priority is visually distinguished in the task list.

2. **Editing Tasks**:
   - Users can edit the title, description, priority, and due date of a task.
   - Changes are reflected immediately and saved to `localStorage`.

3. **Dark Mode**:
   - A toggle button allows switching between light and dark themes.
   - Dark mode is applied across all components and persists after refresh.


