import * as http from 'http';
import express from 'express';
import fs from 'fs';
// import express_group from '@forkjs/group-router';

// require('express-group-routes');
// var router = express.Router();

// let server = http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' })
//     res.write('<h1>Hello World</h1>')
//     res.end()
// }).listen(8001)

// // console.log("Server running on port 8001")

// router.get('/asd', function (req, res) {
//     res.send('Wiki home page');
// })

const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  const article = fs.readFileSync('./data/articles.json', 'utf8')

  const data = {
    title: 'Home Page',
    article: JSON.parse(article),
  }

  res.render('home', data)
})

app.get('/about', (req, res) => {
  res.send('This is page about!')
})

app.get('/find/:id', (req, res) => {
    res.send(`You are looking for ${req.params.id}`)
})

app.get('/', (req, res) => {
    res.send(`You are looking for /`)
})

app.get('/create', (req, res) => {
    res.send(`You are looking for /create`)
})

app.get('/find/:id', (req, res) => {
    res.send(`You are looking for /${req.params.id}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})