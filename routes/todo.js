const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

const isLoggedIn = require("../middleware/isLoggedIn");
const validateTodo = require("../middleware/validateTodo");
const validateEditTodo = require("../middleware/validateEditTodo");
const catchAsync = require("../utils/catchAsync");

router.use(isLoggedIn);

router.get("/", catchAsync(todoController.index));

router.get("/:id", catchAsync(todoController.show));

router.get("/:id/edit", catchAsync(todoController.editForm));

router.post("/", validateTodo, catchAsync(todoController.create));

router.patch("/:id", validateEditTodo, catchAsync(todoController.update));

router.patch("/:id/complete", catchAsync(todoController.markCompleted));

router.patch("/:id/pending", catchAsync(todoController.markPending));

router.delete("/:id", catchAsync(todoController.delete));

module.exports = router;
