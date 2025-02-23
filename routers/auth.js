import { Router } from "express";
import User from "../models/User.js";


const router = new Router()

router.post('/registration',  async (req, res) => {
try {
    const {email, password} = req.body
    const isUsed = await User.findOne({email})
    if(isUsed) {
        return res.staus(300).json({message: 'Данный email уже занят'})
    }
} catch (error) {
    console.log(error);
}
})

export default router