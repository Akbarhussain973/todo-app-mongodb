const express = require("express");
const router = express.Router();

const Todo = require("../models/Todo");
const todoController = require("../controllers/todoController");

router.get("/", todoController.index);
router.get("/:id", todoController.show);
router.get("/:id/edit", todoController.editForm);
router.post("/", todoController.create);
router.patch("/:id", todoController.update);
router.patch("/:id/complete", todoController.markCompleted);
router.patch("/:id/pending", todoController.markPending);
router.delete("/:id", todoController.delete);

module.exports = router;
