# Task Manager API (Express + Sequelize + PostgreSQL)

A simple task management API built using Express.js, Sequelize ORM, and PostgreSQL. This project demonstrates how to connect an Express application to a Postgres database using Sequelize, define models, and implement basic CRUD operations.

## Features
- Add new tasks
- List all tasks
- Toggle task completion status
- Delete tasks

## Tech Stack
- Node.js
- Express.js
- Sequelize ORM
- PostgreSQL

## Getting Started

### Prerequisites

- Node.js and npm installed
- PostgreSQL running locally or remotely

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/tasks-manager-api.git
   cd tasks-manager-api
   ```
   
2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory based on the example file:
   ```bash
   cp .env.example .env
   ```

   Then, edit `.env` and replace the placeholder values with your actual configuration:
   ```env
   PORT=5000
   DATABASE_URL=postgres://username:password@localhost:5432/database_name
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

## API Endpoints

| Method | Endpoint                          | Description              |
| ------ | --------------------------------- | ------------------------ |
| GET    | `/api/tasks`                      | Fetch all tasks          |
| POST   | `/api/tasks`                      | Create a new task        |
| PATCH  | `/api/tasks/:id/toggle-completed` | Toggle completion status |
| DELETE | `/api/tasks/:id`                  | Delete a task            |