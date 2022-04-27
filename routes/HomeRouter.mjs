import express from "express";
import fs from "fs";
import dotenv from "dotenv";

const router = express.Router()
dotenv.config()

router.get("/", (req, res) => {
    const article = fs.readFileSync('./data/articles.json', 'utf8')

    const data = {
      title: 'Home Page',
      article: JSON.parse(article),
      appEnv: process.env.NODE_ENV,
    }
  
    if(process.env.NODE_ENV === 'development') {
      data.appEnv = 'Local Development'
    }
  
    res.render('home/index', data)
})

router.get("/about", (req, res) => {
  res.send('page about')
})


export default router