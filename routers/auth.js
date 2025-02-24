import { Router } from "express";
import User from "../models/User.js";
import bcrypt from 'bcryptjs'

const router = Router(); 

// Регистрация
router.post("/registration", async (req, res) => {
  try {

    const { email, password } = req.body;

    const isUsed = await User.findOne({ email });
    if (isUsed) {
      return res.status(400).json({ message: "Данный email уже занят" });
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = new User({ email, password: hashedPassword });
    await user.save();

    return res.status(201).json({ message: "Пользователь создан" });
  } catch (error) {
    console.error("Ошибка регистрации:", error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

export default router; 

