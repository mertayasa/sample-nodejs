import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

// Import Router
import HomeRouter from './routes/HomeRouter.mjs'
import ArticleRouter from './routes/ArticleRouter.mjs'

dotenv.config()
const app = express()
const port = 3001
const dbURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.qf2mf.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => app.listen(port))
        .catch(err => console.log(err))

// Middleware & View Engine
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Use Router
app.use(HomeRouter)
app.use(ArticleRouter)

// 404 Not Found
app.use((req, res,next) =>{
  res.send('<h1> Page not found </h1>')
})




























// OLD CODE

// import * as http from 'http'
// import fs from 'fs'

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


// import express_group from '@forkjs/group-router'

// require('express-group-routes')
// var router = express.Router()

// let server = http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' })
//     res.write('<h1>Hello World</h1>')
//     res.end()
// }).listen(8001)

// // console.log("Server running on port 8001")

// router.get('/asd', function (req, res) {
//     res.send('Wiki home page')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })