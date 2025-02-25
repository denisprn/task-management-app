# Task Management Application

A simple full-stack application featuring a **Java/Spring Boot** backend and a **React** frontend. This project demonstrates a task manager where user can add, delete tasks, toggle completion, and log in/out with basic authentication.

## Features

- **Task Management**: Create, read, update, and delete (CRUD) tasks with title, description, due date, priority, and completion status.
- **Authentication**: Basic login/logout functionality (default credentials: `user` / `password`).
- **Responsive UI**: Clean, styled interface with CSS.

## Project Structure

- **`java-spring-backend/`**: Spring Boot backend with RESTful APIs and H2 in-memory database.
- **`react-frontend/`**: React frontend with routing and Axios for API calls.
- **Root**: Configuration to run both backend and frontend simultaneously.

## Prerequisites

- **Java 23**: Install a JDK (e.g., OpenJDK or Oracle JDK) to run the backend. Verify with `java -version`.
- **Node.js 22**: Install from [nodejs.org](https://nodejs.org/) for the frontend and root scripts. Verify with `node -v`.
- **Maven**: Not required globally—Maven Wrapper (`mvnw`) is included in `java-spring-backend/`.

## Setup

Follow these steps to get the project running locally after cloning from GitHub:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/denisprn/task-manager-app.git
   cd task-manager-app
   ```
2. **Install Root Dependencies**:
   Installs concurrently for running both apps:
   ```bash
   npm install
   ```
3. **Install Frontend Dependencies**:
   Installs concurrently for running both apps:
   ```bash
    cd react-frontend
    npm install
    cd ..
   ```

## Running the Application

- Start Both Backend and Frontend:
  - From the root directory, run:
    ```bash
    npm start
    ```
  - Backend: Runs on http://localhost:8080 using Maven Wrapper.
  - Frontend: Runs on http://localhost:3000 with React’s development server.
  - Login: Use **user** as the username and **password** as the password to access the task list.
