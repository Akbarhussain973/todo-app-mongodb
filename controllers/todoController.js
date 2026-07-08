const Todo = require("../models/Todo");

exports.index = async (req, res) => {
  const todos = await Todo.find();
  const total = await Todo.totalCount();
  const completed = await Todo.completedCount();
  const pending = total - completed;
  res.render("index", {
    todos,
    title: "Todos",
    totalTodos: todos.length,
    completedTodos: completed,
    pendingTodos: pending,
  });
};

exports.show = async (req, res) => {
  const todoId = req.params.id;
  const todo = await Todo.findById(todoId);

  if (!todo) {
    return res.status(404).send("Todo not found");
  }

  const totalTodos = await Todo.totalCount();
  const completedTodos = await Todo.completedCount();
  const pendingTodos = totalTodos - completedTodos;

  res.render("todo", {
    todo,
    title: "Todo Details",
    totalTodos,
    completedTodos,
    pendingTodos,
  });
};

exports.editForm = async (req, res) => {
  const todoId = req.params.id;
  const todo = await Todo.findById(todoId);

  if (!todo) {
    return res.status(404).send("Todo not found");
  }

  const totalTodos = await Todo.totalCount();
  const completedTodos = await Todo.completedCount();
  const pendingTodos = totalTodos - completedTodos;

  res.render("edit", {
    todo,
    title: "Edit Todo",
    totalTodos,
    completedTodos,
    pendingTodos,
  });
};

exports.create = async (req, res) => {
  const newTodo = req.body.todo;

  if (newTodo && newTodo.trim() !== "") {
    await Todo.create({
      description: newTodo.trim(),
    });
  }

  res.redirect("/todos");
};

exports.update = async (req, res) => {
  const todoId = req.params.id;

  const updatedTodo = await Todo.findByIdAndUpdate(todoId, {
    description: req.body.description,
  });

  if (!updatedTodo) {
    return res.status(404).send("Todo not found");
  }

  res.redirect("/todos");
};

exports.markCompleted = async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    return res.status(404).send("Todo not found");
  }

  await todo.markCompleted();

  res.redirect("/todos");
};

exports.markPending = async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    return res.status(404).send("Todo not found");
  }

  await todo.markPending();

  res.redirect("/todos");
};

exports.delete = async (req, res) => {
  const todoId = req.params.id;

  await Todo.findByIdAndDelete(todoId);

  res.redirect("/todos");
};
