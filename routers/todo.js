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

router.get('/', async (req, res) => {
    try {
        const {userId} = red.query
        const todo = await Todo.find({owner: userId})
        res.json(todo)
    } catch (error) {
        console.log(error);
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const todo = await Todo.findOneAndDelete({_id: req.params.id})
        res.json(todo)
    } catch (error) {
        console.log(error);
    }
})

router.put("/complete/:id", async (req, res) => {
  try {
    const todo = await Todo.findOne({ _id: req.params.id });
    todo.completed = !todo.completed;
    await todo.save();
    res.json(todo)
  } catch (error) {
    console.log(error);
  }
});

router.put("/important/:id", async (req, res) => {
  try {
    const todo = await Todo.findOne({ _id: req.params.id });
    if (!todo) {
      return res.status(404).json({ message: "Задача не найдена" });
    }

    todo.important = !todo.important; 
    await todo.save();
    res.json(todo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

export default router;
