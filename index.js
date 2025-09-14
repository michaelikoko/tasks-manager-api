require("express-async-errors");
const express = require("express");
const app = express();
const { PORT } = require("./utils/config");
const { connectToDB } = require("./utils/db");
const Task = require("./models/task");

// middlewares
app.use(express.json());

// routes
app.get("/api/tasks", async (req, res) => {
  const tasks = await Task.findAll();
  res.json({
    message: "List of tasks",
    tasks: tasks,
  });
});

app.post("/api/tasks", async (req, res) => {
  const { title, dueDate } = req.body;
  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }
  const dueDateObj = dueDate ? new Date(dueDate) : null;
  if (dueDateObj == "Invalid Date") {
    return res.status(400).json({ message: "Invalid due date format" });
  }
  if (dueDateObj && dueDateObj < new Date()) {
    return res.status(400).json({ message: "Due date cannot be in the past" });
  }
  const task = await Task.create({ title, dueDate: dueDateObj });
  res.status(201).json({
    message: "Task created successfully",
    task,
  });
});

app.patch("/api/tasks/:id/toggle-completed", async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByPk(id);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  task.completed = !task.completed;
  await task.save();
  res.json({
    message: task.completed
      ? "Task marked as completed"
      : "Task marked as not completed",
    task,
  });
});

app.delete("/api/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByPk(id);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  await task.destroy();
  res.json({
    message: "Task deleted successfully",
  });
});

const start = async () => {
  try {
    await connectToDB();
    app.listen(PORT, console.log(`Server is running on port ${PORT}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
