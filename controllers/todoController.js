const Todo = require("../models/Todo");
const ExpressError = require("../utils/ExpressError");

exports.index = async (req, res) => {
  const todos = await Todo.find({
    owner: req.user._id,
  });
  const totalTodos = await Todo.totalCount(req.user._id);
  const completedTodos = await Todo.completedCount(req.user._id);
  const pendingTodos = totalTodos - completedTodos;
  res.render("index", {
    todos,
    title: "Todos",
    totalTodos,
    completedTodos,
    pendingTodos,
  });
};

exports.show = async (req, res) => {
  const todo = await Todo.findOne({
    _id: req.params.id,
    owner: req.user._id,
  });

  if (!todo) {
    throw new ExpressError("Todo not found", 404);
  }

  const totalTodos = await Todo.totalCount(req.user._id);
  const completedTodos = await Todo.completedCount(req.user._id);
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
  const todo = await Todo.findOne({
    _id: req.params.id,
    owner: req.user._id,
  });

  if (!todo) {
    throw new ExpressError("Todo not found", 404);
  }

  const totalTodos = await Todo.totalCount(req.user._id);
  const completedTodos = await Todo.completedCount(req.user._id);
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
  await Todo.create({
    description: req.body.todo.trim(),
    owner: req.user._id,
  });

  res.redirect("/todos");
};

exports.update = async (req, res) => {
  const updatedTodo = await Todo.findOneAndUpdate(
    {
      _id: req.params.id,
      owner: req.user._id,
    },
    {
      description: req.body.description,
    },
  );

  if (!updatedTodo) {
    throw new ExpressError("Todo not found", 404);
  }

  res.redirect("/todos");
};

exports.markCompleted = async (req, res) => {
  const todo = await Todo.findOne({
    _id: req.params.id,
    owner: req.user._id,
  });

  if (!todo) {
    throw new ExpressError("Todo not found", 404);
  }

  await todo.markCompleted();

  res.redirect("/todos");
};

exports.markPending = async (req, res) => {
  const todo = await Todo.findOne({
    _id: req.params.id,
    owner: req.user._id,
  });

  if (!todo) {
    throw new ExpressError("Todo not found", 404);
  }

  await todo.markPending();

  res.redirect("/todos");
};

exports.delete = async (req, res) => {
  const deletedTodo = await Todo.findOneAndDelete({
    _id: req.params.id,
    owner: req.user._id,
  });

  if (!deletedTodo) {
    throw new ExpressError("Todo not found", 404);
  }

  res.redirect("/todos");
};
