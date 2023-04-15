import express from "express";
import todoController from "../controllers/todoController.js";
const router = express.Router();

router
  .route("/")
  .get(todoController.getAllTodos)
  .post(todoController.createTodo);

router
  .route("/:id")
  .get(todoController.getSingleTodo)
  .patch(todoController.updateTodo)
  .delete(todoController.deleteTodo);

export default router;
