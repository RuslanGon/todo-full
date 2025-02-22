import express from "express";
import mongoose from "mongoose";

const app = express()
const PORT = process.env.PORT || 5000

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.lc6ql.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0");
    app.listen(PORT, () => {
      console.log(`Server start port on ${PORT}`);
    });
  } catch (error) {
    console.log("Ошибка соединения");
  }
}

start();