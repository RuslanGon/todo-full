import express from "express";
import mongoose from "mongoose";
import cors from "cors"; 
import authRoutes from "./routers/auth.js";

const app = express()
const PORT = process.env.PORT || 5000


app.use(cors({ origin: "*", credentials: true }));


app.use(express.json()); 
app.use("/api/auth", authRoutes); 

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