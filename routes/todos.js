import express from "express";
import {
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
  createTodo,
} from "../controllers/todos.js";
const router = express.Router();

router.route("/").get(getTodos).post(createTodo);

router.route("/:id").get(getTodo).put(updateTodo).delete(deleteTodo);

export default router;
