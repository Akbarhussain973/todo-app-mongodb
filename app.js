const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const methodOverride = require("method-override");
const todoRoutes = require("./routes/todo");
const Todo = require("./models/Todo");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.use("/todos", todoRoutes);

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
  });
});

app.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.render("index", { todos, title: "Todos", totalTodos: todos.length });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
