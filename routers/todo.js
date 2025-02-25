import { Router } from "express";
import Todo from "../models/Todo.js";

const router = Router();

router.post("/add", async (req, res) => {
  try {
    const { text, userId } = req.body;
    const todo = await new Todo({
      text,
      owner: userId,
      completed: false,
      important: false,
    });
    await todo.save();
    res.json(todo);
  } catch (error) {
    console.log(error);
  }
});

export default router;
