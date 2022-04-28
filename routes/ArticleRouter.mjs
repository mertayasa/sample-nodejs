import express from "express";
import dotenv from "dotenv";
import Article from "../models/Article.mjs";

const router = express.Router()
dotenv.config()

router.get('/', (req, res) => {
    Article.find().sort({createdAt:-1})
        .then((articles) => {
            let modifiedArticles = articles.map(article => ({
                ...article._doc,
                createdAt: article._doc.createdAt.toDateString(),
            }))

            const data = {
                title: 'Article Page',
                articles: modifiedArticles,
            }

            res.render('article/index', data)
        })
        .catch(err => res.send(err))
})

router.get('/create', (req, res) => {
    const data = {
        title: 'Create Article Page',
    }

    res.render('article/create', data)
})

router.post('/store', (req, res) => {
    const count = Math.floor(Math.random() * 1000)
    const article = new Article({
        title: req.body.title,
        body: req.body.body,
        author: req.body.author
    })

    article.save()
        .then(() => res.redirect('/article'))
        .catch(err => res.send(err))
})

router.get('/find/:id', (req, res) => {
    Article.findById(req.params.id)
        .then(article => {
            const data = {
                title: 'Article Detail Page',
                article: article,
            }

            res.render('article/detail', data)
        })
        .catch(err => res.send(err))
})

router.get('/edit/:id', (req, res) => {
    Article.findById(req.params.id)
        .then(article => {
            const data = {
                title: 'Article Edit Page',
                article: article,
            }

            res.render('article/edit', data)
        })
        .catch(err => res.send(err))
})

router.patch('/update/:id', (req, res) => {
    Article.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        body: req.body.body,
        author: req.body.author,
    })
    .then(() => res.json({code: 1}))
    .catch(err => {
        console.log(err);
        res.json({code: 0, message: err.message})
    })
})

router.delete('/delete/:id', (req, res) => {
    Article.findByIdAndDelete(req.params.id)
            .then(() => res.json({code: 1}))
            .catch(err => {
                console.log(err);
                res.json({code: 0, message: err.message})
            })
})

export default router