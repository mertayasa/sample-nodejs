import express from "express";
import dotenv from "dotenv";
import HomeController from "../controllers/HomeController.mjs";

const router = express.Router()
dotenv.config()

router.get("/", HomeController.index)

router.get("/about", HomeController.about)


export default router