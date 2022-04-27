// import * as http from 'http'
// import fs from 'fs'
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

// Import Router
import HomeRouter from './routes/HomeRouter.mjs'

const app = express()
const port = 3001
const dbURI = 'mongodb+srv://balimerta:balimerta@cluster0.qf2mf.mongodb.net/sample1?retryWrites=true&w=majority'

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => app.listen(port))
        .catch(err => console.log(err))
        
app.set('view engine', 'ejs')
dotenv.config()
app.use(express.static('public'))

app.use(HomeRouter)

app.get('/find/:id', (req, res) => {
    res.send(`You are looking for ${req.params.id}`)
})

app.get('/create', (req, res) => {
    res.send(`You are looking for /create`)
})

app.get('/find/:id', (req, res) => {
    res.send(`You are looking for /${req.params.id}`)
})

app.use((req, res,next) =>{
  res.send('<h1> Page not found </h1>')
})

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